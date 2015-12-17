'use strict';

const express = require('express');

let app = express();

app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

app.all('/', function(req, res) {
    res.send('<b>Helloworld</b>');
});

app.get('/toto', function(req, res) {
    res.send('<b>Toto</b>');
});

app.listen(3000, () => {
    console.log('Serveur démarré http://localhost:3000/');
});