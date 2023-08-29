const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Laaaaaaaaaaaaaaaast page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
    return;
  }

  res.end(
    `<div><h1>OOOOOps THere is A Wrong Thing</h1><br /> <a href='/'>Back to Home</a></div>`
  );
});

server.listen(5000);
