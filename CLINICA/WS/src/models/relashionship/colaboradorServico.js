const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
        colaboradorId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Colaborador', //vai fazer referencia na modal Colaborador
        required: true
    },

    servicoId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Servico', //vai fazer referencia na modal Servico
        required: true
    },

    status: {
        type: String,
        require: [true],
        enum: ['A', 'I'], // permite cadastrar somente o que está no array
        default: 'A' // quando não passar nada sempre será A
    },
    
    dataCadastro: {
        type: Date,
        default: Date.now, // vai pegar a data de agora
    }
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServico);