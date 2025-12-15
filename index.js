const http = require("http");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  res.end("<h1>Hello World!</h1>");
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
