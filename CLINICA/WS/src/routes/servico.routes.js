const express = require('express');
const router = express.Router();
const Clinica = require('../models/clinica');
const Servico = require('../models/servico');

router.post('/', async (req, res) => {
    try{

    }catch (err) {
        res.json({ error: true, message: err.message });
    }
});


module.exports = router;