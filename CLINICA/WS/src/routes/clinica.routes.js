const express = require('express');
const router = express.Router();
const Clinica = require('../models/clinica');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
    try{
        // lógica
        const clinica = await new Clinica(req.body).save(); //criou a constante que vai esperar criar uma nova clínica com tudo que vier dentro da requisição, logo quando estiver no painel e criar um login, por exexplo, vai ser criado um json com todos os dados da clínica. E como pega esses dados? pelo req.body e logo em seguida salva a clínica.
        //depois que criar a clínica, o que vou fazer? vou devolver a clínica para a requisição

        res.json({ clinica }); //cria uma chave clinica com valor de clinica, por estar short notation, já pega a chave e valor dessa forma mesmo.

    } catch (err) {
        res.json({ error: true, message: err.message }) // se der erro e vier uma mensagem true, sabe que tem erro por causa dessa linha
    }

});


//RECUPERAR TODOS OS SERVIÇOS DA CLÍNICA
/*
  FAZER NA #01
*/
router.get('/servicos/:salaoId', async (req, res) => {
    try {
      const { salaoId } = req.params;
      const servicos = await Servico.find({
        salaoId,
        status: 'A',
      }).select('_id titulo');
  
      res.json({
        error: false,
        servicos: servicos.map((s) => ({ label: s.titulo, value: s._id })),
      });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });
  

module.exports = router;