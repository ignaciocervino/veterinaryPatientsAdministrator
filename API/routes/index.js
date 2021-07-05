const { Router } = require('express');
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');
module.exports = function(){
    //Agrega nuevos pacientes via POST - REST debo ir haciedno la peticion una a una
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    //Obtiene todos los registros de pacientes en la db
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );


    // Obtiene un paciente en especifico
    router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
    );


    //Actualizar un registro
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    //Elimina un registro
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );


    return router;
}
