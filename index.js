const axios = require('axios');
const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const path = require('path');

async function checkProxy(proxy) {
    const [ip, port, user, pass] = proxy.split(':');
    const proxyConfig = {
        proxy: {
            host: ip,
            port: port,
            auth: {
                username: user,
                password: pass,
            },
        },
        timeout: 10000
    };

    try {
        await axios.get('http://httpbin.org/ip', proxyConfig);
        return proxy;
    } catch (error) {
        return null;
    }
}

// Nếu là luồng con (worker)
if (!isMainThread) {
    (async () => {
        const proxies = workerData;
        const checkedProxies = [];

        for (const proxy of proxies) {
            const result = await checkProxy(proxy);
            if (result) {
                checkedProxies.push(result);
            }
        }
        parentPort.postMessage(checkedProxies);
    })();
} else {
    const proxies = fs.readFileSync('proxy_not_check.txt', 'utf-8').split('\n').filter(Boolean);
    const chunkSize = 10;
    const workers = [];
    let checkedProxies = [];

    function createWorker(proxyChunk) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path.resolve(__filename), {
                workerData: proxyChunk,
            });

            worker.on('message', (result) => resolve(result));
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    }

    async function main() {
        const chunks = [];
        for (let i = 0; i < proxies.length; i += chunkSize) {
            chunks.push(proxies.slice(i, i + chunkSize));
        }
        const workerPromises = chunks.map(chunk => createWorker(chunk));
        const results = await Promise.all(workerPromises);

        checkedProxies = results.flat();
        fs.writeFileSync('proxy.txt', checkedProxies.join('\n'), 'utf-8');
        console.log(`Total proxy worked: ${checkedProxies.length}`);
    }

    main().catch(console.error);
}
