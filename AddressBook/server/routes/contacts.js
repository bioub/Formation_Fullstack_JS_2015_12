'use strict';
const express = require('express');
var Contact = require('../models/contact');

let routes = express.Router();

let nextId = 3;

let contacts = [{
    id: 1,
    prenom: 'Bill',
    nom: 'Gates',
    email: 'bgates@microsoft.com'
},{
    id: 2,
    prenom: 'Steve',
    nom: 'Jobs',
    tel: '+1 1254 1542 1551'
}];

// list
// GET /api/v1/contacts
routes.get('/', function(req, res, next) {

    Contact.find(function (err, contacts) {
        if (err) {
            return next(err);
        }
        res.json(contacts);
    });
});

// show
// GET /api/v1/contacts/123
routes.get('/:id', function(req, res, next) {
    var id = req.params.id;

    Contact.findOne({_id: id}, function (err, contact) {
        if (err) {
            return next(err);
        }

        if (!contact) {
            // appel du middleware suivant (ici erreur 404)
            return next();
        }

        res.json(contact);
    });


});

// add
// POST /api/v1/contacts
routes.post('/', function(req, res, next) {
    var contact = new Contact(req.body);

    contact.save(function(err, contact) {
        if (err) {
            next(err);
        }
        res.status(201);
        res.json(contact);
    });
});

// update
// POST /api/v1/contacts/123
// PUT /api/v1/contacts/123
routes.post('/:id', function(req, res, next) {

});

// delete
// DELETE /api/v1/contacts/123
routes.delete('/:id', function(req, res, next) {

});

//export default routes;
module.exports = routes;