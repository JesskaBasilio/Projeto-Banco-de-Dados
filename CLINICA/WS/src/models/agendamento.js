const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
    clinicaId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Clinica', //vai fazer referencia na modal Clinica
        required: true
    },

    clienteId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Cliente', //vai fazer referencia na modal Cliente
        required: true
    },

    servicoId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Servico', //vai fazer referencia na modal Servico
        required: true
    },

    colaboradorId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Colaborador', //vai fazer referencia na modal Colaborador
        required: true
    },

    data: {
        type: Date,
        required: true
    },

    comissao: {
        type: Number,
        required: true
    },

    valor: {
        type: Number,
        required: true
    },

    transactionId: {
        type: String,
        required: true
    },
   
    dataCadastro: {
        type: Date,
        default: Date.now, // vai pegar a data de agora
    }
});

module.exports = mongoose.model('Agendamento', agendamento);