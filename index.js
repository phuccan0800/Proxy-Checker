const axios = require('axios');
const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const path = require('path');
const { HttpsProxyAgent } = require('https-proxy-agent');

async function checkProxy(proxy) {
    let proxyConfig;

    const proxyParts = proxy.split(':');
    if (proxyParts.length === 2) {
        const [ip, port] = proxyParts;
        proxyConfig = {
            httpsAgent: new HttpsProxyAgent(`http://${ip}:${port}`),
            timeout: 5000,
        };
    } else if (proxyParts.length === 4) {
        const [ip, port, user, pass] = proxyParts;
        proxyConfig = {
            httpsAgent: new HttpsProxyAgent(`http://${user}:${pass}@${ip}:${port}`),
            timeout: 5000,
        };
    } else {
        return null;
    }

    try {
        const response = await axios.get('https://httpbin.org/ip', proxyConfig);
        if (response.status === 200) {
            return proxy;
        }
    } catch (error) {
        return null;
    }
}

if (!isMainThread) {
    (async () => {
        const proxies = workerData;
        const checkedProxies = [];
        for (const proxy of proxies) {
            const result = await checkProxy(proxy);
            if (result) checkedProxies.push(result);
        }

        parentPort.postMessage(checkedProxies);
    })();
} else {
    const proxies = fs.readFileSync('proxy_not_check.txt', 'utf-8').split('\n').filter(Boolean);
    const chunkSize = 10;
    let checkedProxies = [];

    const createWorker = (proxyChunk) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path.resolve(__filename), { workerData: proxyChunk });

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    };

    async function main() {
        const chunks = chunkProxies(proxies, chunkSize);
        const workerPromises = chunks.map(createWorker);

        try {
            const results = await Promise.all(workerPromises);
            checkedProxies = results.flat();

            fs.writeFileSync('proxy.txt', checkedProxies.join('\n'), 'utf-8');
            console.log(`Total proxies working: ${checkedProxies.length}`);
        } catch (error) {
            console.error('Error processing proxies:', error);
        }
    }

    function chunkProxies(proxies, size) {
        const chunks = [];
        for (let i = 0; i < proxies.length; i += size) {
            chunks.push(proxies.slice(i, i + size));
        }
        return chunks;
    }
    main();
}
