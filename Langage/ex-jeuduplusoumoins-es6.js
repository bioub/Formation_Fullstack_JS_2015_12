// Exercice Jeu du plus ou Moins
// 1 - Générer un nombre aléatoire entre 0 et 100

// 2 - Demander à l'utilisateur de saisir un nombre
// avec readline

// 3 - Afficher à l'infini s'il est plus grand
// ou plus petit jusqu'à ce qu'il soit trouvé

// 4 - Stocker dans un tableau les essais et les
// réafficher à chaque tour (regarder MDN Array)

// 5 - Gérer l'erreur si la saisie n'est pas un
// nombre (voir isNaN sur MDN)
'use strict';

const readline = require('readline');

class Jeu {
    constructor(options) {
        options = options || {};
        var min = options.min || 0;
        var max = options.max || 100;

        this.entierAlea = Math.floor(Math.random() * (max - min + 1)) + min;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.essais = [];
    }

    jouer() {
        if (this.essais.length) {
            console.log('Vous avez déjà joué ' + this.essais.join(', '));
        }

        this.rl.question("Quel est le nombre? ", (answer) => {
            var nbSaisi = Number(answer);

            if (isNaN(nbSaisi)) {
                console.error('Il faut saisir un nombre');
                return this.jouer();
            }

            this.essais.push(nbSaisi);

            if (nbSaisi < this.entierAlea) {
                console.log(`Le nombre recherché est plus grand que ${nbSaisi} ! `);
                return this.jouer();
            }

            if (nbSaisi > this.entierAlea) {
                console.log(`Le nombre recherché est plus petit que ${nbSaisi} ! `);
                return this.jouer();
            }

            console.log('Gagné !!!');
            this.rl.close();
        });
    }
}

let jeu = new Jeu({question: 'Quel est le nombre'});
jeu.jouer();
