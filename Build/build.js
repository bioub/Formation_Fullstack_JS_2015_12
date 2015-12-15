var fs = require('fs');
var path = require('path');

var distPath = path.join(__dirname, 'dist');
var srcPath = path.join(__dirname, 'src');

try {
    var stats = fs.statSync(distPath);
}
catch(e) {
    fs.mkdirSync(distPath);
}
var fichiers = fs.readdirSync(srcPath);
for (var i=0; i<fichiers.length; i++) {
    var fichier = fichiers[i];
    var src = path.join(srcPath, fichier);
    var dest = path.join(distPath, fichier);
    var contenu = fs.readFileSync(src);

    // transformer
    // jquery-1.11.3.js
    // en
    // //code.jquery.com/jquery-1.11.3.min.js

    fs.writeFileSync(dest, contenu);
}