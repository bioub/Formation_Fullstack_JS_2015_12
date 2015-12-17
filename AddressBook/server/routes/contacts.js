'use strict';
const express = require('express');

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
    res.json(contacts);
});

// show
// GET /api/v1/contacts/123
routes.get('/:id', function(req, res, next) {
    var id = Number(req.params.id);

    var contact = contacts.find((elt) => id === elt.id);

    if (!contact) {
        // appel du middleware suivant (ici erreur 404)
        return next();
    }

    res.json(contact);
});

// add
// POST /api/v1/contacts
routes.post('/', function(req, res, next) {
    var contact = req.body;



    res.json(contact);
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