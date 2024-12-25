# Proxy-Checker
 Simple Proxy Checker Multithreads
## Installation

To install the dependencies, run the following command:

```bash
npm install
# Proxy-Checker
A high-performance multithreaded proxy checker tool

## Features
| Current Features | Future Plans |
|-----------------|--------------|
| ✅ Multithreaded checking | 🔄 GUI Interface |
| ✅ Support for IP:PORT format | 🔄 Real-time checking status |
| ✅ Support for IP:PORT:USER:PASS format | 🔄 Multiple protocol support (SOCKS4/5) |
| ✅ Automatic proxy validation | 🔄 Export results in multiple formats |
| ✅ Fast batch processing | 🔄 Proxy anonymity level detection |

## Installation

```bash
git clone https://github.com/phuccan0800/Proxy-Checker.git
cd Proxy-Checker
npm install
```

## Usage

1. Create a file named `proxy_not_check.txt`
2. Add your proxies in either format:
    ```
    ip:port
    ip:port:username:password
    ```
3. Run the checker:
    ```bash
    node index.js
    ```
4. Working proxies will be saved to `proxy.txt`

## Performance
- Processes 10 proxies simultaneously
- 10-second timeout for each proxy
- Validates against httpbin.org

## Technical Details
- Built with Node.js
- Uses Worker Threads for parallel processing
- Axios for HTTP requests
- HTTPS-Proxy-Agent for proxy handling

## Contributing
Pull requests welcome. For major changes:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License
ISC License
```

## Usage

To check the proxies, place your proxies in a file named `proxy_not_check.txt` with each proxy on a new line in the format `ip:port:user:pass`. Then run the following command:

```bash
node index.js
```

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the ISC License.