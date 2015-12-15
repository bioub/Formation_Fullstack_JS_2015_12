// Module
// Objectif limiter la portée des identifiants
// En général 1 fichier = 1 module

// IIFE : Immediately Invoked Function Expression

// Voir aussi :
// CommonJS (Node.js)
// AMD (navigateurs)
// EcmaScript 6
// System
(function () {
    'use strict';

    var id = setInterval(function() {
        console.log('Bonjour a tous');
    }, 1000);

    setTimeout(function timeoutHandler() {
        console.log('Fin');
        clearInterval(id);
    }, 4000);

// function declaration
    function addition(nb1, nb2) {
        return Number(nb1) + Number(nb2);
    }

    console.log(addition(2, 3));
    console.log(addition('2', '3'));
    console.log(addition(2, 3, 4));
    console.log(addition(2));

// function expression
    var addition = function(nb1, nb2) {
        return Number(nb1) + Number(nb2);
    };


// named function expression
    var addition = function addition(nb1, nb2) {
        return Number(nb1) + Number(nb2);
    };

    function addition(nb1, nb2) {
        if (typeof nb1 === 'undefined') {
            throw new Error('nb1 est obligatoire');
        }

        nb2 = nb2 || 0;

        var somme = Number(nb1) + Number(nb2);

        for (var i=2; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    }

    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    function closure(i) {
        // portée de closure
        // (portée sauvegardée)
        return function() {
            console.log(i);
        };
    }

    for (var i=0; i<3; i++) {
        setTimeout(closure(i), 1000);
    }


}());