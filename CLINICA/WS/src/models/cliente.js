const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        require: [true, 'Nome no campo é obrigatório.']
    },

    foto: {
        type: String,
        require: [true]
    },

    email: {
        type: String,
        require: [true]
    },

    senha: {
        type: String,
        default: null // quando não houver senha irá preencher vazio
    },
        
    telefone: {
        type: String,
        require: [true]
    },

    dataNascimento: {
        type: String, // yyyy-mm-dd
        require: [true]
    },

    sexo: {
        type: String,
        enum: ['M', 'F'], // permite cadastrar somente o que está no array
        require: [true]
    },

    status: {
        type: String,
        require: [true],
        enum: ['A', 'I'], // permite cadastrar somente o que está no array
        default: 'A' // quando não passar nada sempre será A
    },

    documento: {
        tipo: {
            type: String,
            enum: ['individual', 'corporation'],
            require: [true]
        },

        numero: {
            type: String,
            require: [true]
        },
    },

    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String,
        required: true
    },
   
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Cliente', cliente);