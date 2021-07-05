const express = require('express');

//Crear el servidor
const app = express();

// puerto y arrancar el servidor
app.listen(4000,()=> {
    console.log('Servidor funcionando');
});