'use strict';

var routes = {
    "/": function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    },
    "/toto": function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Page toto\n');
    }
};

module.exports = routes;