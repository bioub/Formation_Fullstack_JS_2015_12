'use strict';

// 1 - Utiliser des objets existants

console.log('coucou');
Math.random();

// 2 - Utiliser des fonctions constructeurs existants

var now = new Date();
console.log(typeof Date);

// 3 - Utiliser les syntaxes litérales

// String
console.log('coucou'.length);

var array = [];
var regexp = /[0-9]/;

var objet = {};

var contact = {
    prenom: 'Romain',
    nom: 'Bohdanowicz'
};

contact.age = 30;
contact.hello = function() {
    return 'Bonjour je suis ' + this.prenom;
};

console.log(JSON.stringify(contact));

//var contactDepuisJSON = {
//    "prenom": "Romain",
//    "nom": "Bohdanowicz"
//};

// 4 - Simuler les classes en créant des fonctions
// constructeurs

function Contact(prenom, nom) {
    this.prenom = prenom || 'John';
    var nom = nom || 'Doe';
    this.hello = function() {
        return 'Bonjour je suis ' + this.prenom + " " + nom;
    };
}

Contact.prototype.sePresenter = function() {
    return 'Bonjour je suis ' + this.prenom;
};

Contact.coucou = function() {
    return this.prenom;
};


var romain = new Contact('Romain', 'Bohdanowicz');
console.log(Contact.coucou.call(romain));
console.log(romain.prenom);
console.log(romain.nom);
console.log(romain.hello());
console.log(romain.sePresenter());
console.log(romain.hasOwnProperty('prenom'));
console.log(typeof romain);
console.log(romain instanceof Contact);
console.log(romain instanceof Object);

//function addition() {
//    var somme = 0;
//
//    console.log(arguments instanceof  Array);
//
//    Array.prototype.forEach.call(arguments, function(arg) {
//        somme += Number(arg);
//    });
//
//    return somme;
//}
//console.log(addition(3, 4, 23));