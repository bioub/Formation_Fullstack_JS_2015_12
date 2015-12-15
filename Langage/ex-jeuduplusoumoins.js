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


var readline = require('readline');

function Jeu(options) {
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

Jeu.prototype.jouer = function () {
    var that = this;

    if (this.essais.length) {
        console.log('Vous avez déjà joué ' + this.essais.join(', '));
    }

    this.rl.question("Quel est le nombre? ", function(answer) {
        var nbSaisi = Number(answer);

        if (isNaN(nbSaisi)) {
            console.error('Il faut saisir un nombre');
            return that.jouer();
        }

        that.essais.push(nbSaisi);

        if (nbSaisi < that.entierAlea) {
            console.log('Le nombre recherché est plus grand');
            return that.jouer();
        }

        if (nbSaisi > that.entierAlea) {
            console.log('Le nombre recherché est plus petit');
            return that.jouer();
        }

        console.log('Gagné !!!');
        that.rl.close();
    });
};

var jeu = new Jeu({question: 'Quel est le nombre'});
jeu.jouer();

