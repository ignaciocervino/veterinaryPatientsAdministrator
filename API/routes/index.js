const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');
module.exports = function(){
    //Agrega nuevos pacientes via POST - REST debo ir haciedno la peticion una a una
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    return router;
}