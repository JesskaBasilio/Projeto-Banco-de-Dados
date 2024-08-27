const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const arquivo = new Schema({ // antes era arquivos
    referenciaId: {  //seta para qual id o model pertence,
      type: Schema.Types.ObjectId, // isso é um id de um model
      refPath: 'model', //vai vir o id do model para essa variável
    },
    model: {
      type: String,
      required: true,
      enum: ['Servico', 'Salao'], //somente esses models poderao ser setados
    },
    caminho: {
      type: String,
      required: true,
    },
    dataCadastro: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model('Arquivo', arquivo); // antes era Arquivos, arquivos