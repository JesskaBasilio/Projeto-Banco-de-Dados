const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clinicaColaborador = new Schema({
    clinicaId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Clinica', //vai fazer referencia na modal Clinica
        required: true
    },

    colaboradorId: {
        type: mongoose.Types.ObjectId, // é um tipo de objectId, tem que ser válido, tem que fazer referencia, onde?
        ref: 'Colaborador', //vai fazer referencia na modal Colaborador
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

module.exports = mongoose.model('ClinicaColaborador', clinicaColaborador);