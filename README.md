# 🚀 Proxy-Checker
> A high-performance multithreaded proxy checker tool with advanced capabilities

<div align="center">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Multithreaded-✓-green.svg?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Performance-High-orange.svg?style=for-the-badge"/>
</div>

## 🌟 Features Overview

<div align="center">
  <table>
    <tr>
      <td align="center">
        <h3>💫 Available Now</h3>
        <div align="left">
          <p>🚀 <b>Multithreaded Processing</b> - Lightning fast checks</p>
          <p>🔒 <b>Multiple Format Support</b> - IP:PORT & IP:PORT:USER:PASS</p>
          <p>✅ <b>Smart Validation</b> - Automatic proxy verification</p>
          <p>⚡ <b>Batch Operations</b> - Process multiple proxies simultaneously</p>
          <p>📊 <b>Performance Optimized</b> - 10 concurrent checks</p>
        </div>
      </td>
      <td align="center">
        <h3>🔮 Coming Soon</h3>
        <div align="left">
          <p>🖥️ <b>Modern GUI</b> - User-friendly interface</p>
          <p>📈 <b>Live Statistics</b> - Real-time monitoring</p>
          <p>🔄 <b>Protocol Support</b> - SOCKS4/5 compatibility</p>
          <p>💾 <b>Export Options</b> - Multiple format support</p>
          <p>🛡️ <b>Advanced Detection</b> - Anonymity level analysis</p>
        </div>
      </td>
    </tr>
  </table>
</div>

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/phuccan0800/Proxy-Checker.git

# Navigate to project directory
cd Proxy-Checker

# Install dependencies
npm install
```

## 📚 Quick Start Guide

1. **Setup** - Create `proxy_not_check.txt` in the root directory
2. **Add Proxies** - Use either format:
   ```plaintext
   ip:port
   ip:port:username:password
   ```
3. **Run** - Execute with:
   ```bash
   node index.js
   ```
4. **Results** - Working proxies are saved to `proxy.txt`

## 🔧 Technical Specifications

<div align="center">
  <table>
    <tr>
      <th>Feature</th>
      <th>Specification</th>
    </tr>
    <tr>
      <td>Concurrent Processing</td>
      <td>10 proxies</td>
    </tr>
    <tr>
      <td>Timeout Setting</td>
      <td>10 seconds</td>
    </tr>
    <tr>
      <td>Validation Service</td>
      <td>httpbin.org</td>
    </tr>
    <tr>
      <td>Core Technologies</td>
      <td>Node.js, Worker Threads, Axios</td>
    </tr>
  </table>
</div>

## 🤝 Contributing

We welcome contributions! Here's how:

1. 🔱 Fork the repository
2. 🌿 Create a feature branch
3. ✨ Make your changes
4. 📬 Submit a pull request

## 📜 License

This project is licensed under the ISC License.

<div align="center">
    <b>Made with ❤️ for the proxy checking community</b>
</div>

