'use strict';
const express = require('express');
const contacts = require('./routes/contacts');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

let app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

function serveIndex(req, res, next) {
    var index = path.join(__dirname, '..', 'client', 'index.html');
    fs.readFile(index, function(err, data) {
        if (err) {
            next(err);
        }

        res.send(data.toString());
    });
}

// si le client arrive directement sur la page /ajouter on sert le fichier
// index.html (idem pour toutes les routes côté angular)
app.all('/contact/ajouter', serveIndex);
app.all('/contact/*', serveIndex);

app.use(bodyParser.json());
app.use('/api/v1/contacts', contacts);

app.use(function(req, res, next) {
    res.status(404);
    res.json({
        message: 'Page not found'
    });
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.json({
        message: 'Error 500',
        error: err
    });
});

module.exports = app;