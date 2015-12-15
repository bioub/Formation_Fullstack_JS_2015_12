// Exercice Jeu du plus ou Moins

// 1 - Générer un nombre aléatoire entre 0 et 100
var entierAlea = Math.floor(Math.random() * 101);

// 2 - Demander à l'utilisateur de saisir un nombre
// avec readline
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jouer() {

    rl.question("What do you think of Node.js? ", function(answer) {
        // TODO: Log the answer in a database
        console.log("Thank you for your valuable feedback:", answer);
        jouer();
        //rl.close();
    });
}
jouer();

// 3 - Afficher à l'infini s'il est plus grand
// ou plus petit jusqu'à ce qu'il soit trouvé

// 4 - Stocker dans un tableau les essais et les
// réafficher à chaque tour (regarder MDN Array)

// 5 - Gérer l'erreur si la saisie n'est pas un
// nombre (voir isNaN sur MDN)