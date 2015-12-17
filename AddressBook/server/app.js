'use strict';
const express = require('express');
const contacts = require('./routes/contacts');
const bodyParser = require('body-parser');

let app = express();

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