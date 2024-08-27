const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    clinicaId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Clinica', //vai fazer referencia na modal Clinica
        required: true
    },

    especialidades: [{
            type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
            ref: 'Servico', //vai fazer referencia na modal Servico
            required: true
        },
    ],

    colaboradores: [{
            type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
            ref: 'Colaborador', //vai fazer referencia na modal Colaborador
            required: true
        },
    ],

    dias: {
        type: [Number], //signivica que somente vai passar numeros dentro do array
        required: true
    },

    inicio: {
        type: Date, 
        required: true
    },

    fim: {
        type: Date, 
        required: true
    },

    dataCadastro: {
        type: Date,
        default: Date.now, // vai pegar a data de agora
    }
});

module.exports = mongoose.model('Horario', horario);