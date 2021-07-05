const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');//js va a buscar el archivo index por defecto

//Crear el servidor
const app = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar routing
app.use('/',routes());//Middelwares de express

// puerto y arrancar el servidor
app.listen(4000,()=> {
    console.log('Servidor funcionando');
});