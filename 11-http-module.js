const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello welcome to our website");
  } else if (req.url === "/about") {
    res.end("we are a medicinal report generator");
  } else {
    res.end(`
   <h1>opps there is no such page </h1>
   <a href="/"> back home </a>
    `);
  }
});

server.listen(5000);
