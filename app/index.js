const http = require('http');

const PORT = 3000;

http.createServer((req, res) => {
  res.end('DevOps CI/CD working 🚀');
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
