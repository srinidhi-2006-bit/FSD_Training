const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello, Welcome to Node.js HTTP Server</h1>");
});
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});

/*
o/p:
Server is running at http://localhost:3000

Hello, Welcome to Node.js HTTP Server

*/