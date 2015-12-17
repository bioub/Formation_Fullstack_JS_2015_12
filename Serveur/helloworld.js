'use strict';

const http = require('http');
const routes = require('./helloworld-routes');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {

    for (let url in routes) {
        if (routes.hasOwnProperty(url) && url === req.url) {
            routes[url](req, res);
            return;
        }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found\n');

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
