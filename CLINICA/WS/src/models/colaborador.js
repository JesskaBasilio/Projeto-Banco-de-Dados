const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
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

    contaBancaria: {
        titular: {
          type: String, 
          required: true  
        },

        cpfCnpj: {
            type: String, 
            required: true  
        },

        banco: {
          type: String, 
          required: true  
        },

        tipo: {
            type: String,  // tipo é conta corrente ou poupança
            required: true  
          },
        
        agencia: {
            type: String, 
            required: true  
        },

        numero: {
            type: String, 
            required: true  
        },

        dv: {
            type: String, // dígito verificador
            required: true  
        },
    },

    recipientId: {
        type: String, //identificador do colaborador
        required: true  
    },
   
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('Colaborador', colaborador);