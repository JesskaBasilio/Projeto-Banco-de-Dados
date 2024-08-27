const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clinica = new Schema({
    nome: {
        type: String,
        require: [true, 'Nome no campo é obrigatório.'],
    },

    foto: String,

    capa: String,

    email: {
        type: String,
        require: [true, 'Email no campo é obrigatório.'],
    },

    senha: {
        type: String,
        default: null,
    },
        
    telefone: String,

    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String
    },

    geo: {
        type: String,
        cordinate: Array,
    },

    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

clinica.index({ geo: '2dsphere' });

module.exports = mongoose.model('Clinica', clinica);