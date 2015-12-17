var mongoose = require('mongoose');
var contactSchema = mongoose.Schema({
    prenom: {type: String, required: true},
    nom: {type: String, required: true},
    email: String,
    telephone: String,
});

module.exports = mongoose.model('contacts', contactSchema);