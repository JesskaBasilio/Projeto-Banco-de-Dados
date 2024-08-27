const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    clinicaId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que existir, onde?
        ref: 'Clinica', //vai existir na model Clinica
        required: true
    },

    titulo: {
        type: String,
        required: true
    },

    preco: {
        type: Number,
        required: true
    },

    comissao: {
        type: Number, //% de comissao sobre o preço
        required: true
    },


    duracao: {
        type: String, // duraçao em minutos
        required: true
    },


    recorrencia: {
        type: Number, // periodo de remarcar o serviço em dias
        required: true
    },

    descrição: {
        type: String,
        required: true
    },

    status: {
        type: String,
        require: [true],
        enum: ['A', 'I', 'E'], // permite cadastrar somente o que está no array, ATIVO/INATIVO/EXCLUSÃO
        default: 'A' // quando não passar nada sempre será A
    },

    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Servico', servico);