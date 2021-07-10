const {app,BrowserWindow} = require('electron');

let appWindow;
//Ventana principal del proyecto
function crearVentana(){
    appWindow = new BrowserWindow({
        width: 1200,//son px
        height: 800,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false,//Para que no se cargue hasta que este lista
        icon:'icon.png'

    });

    //Cuando la aplicacion es cerrada
    appWindow.on('closed',()=>{
        appWindow = null;
    });

    //Cargar HTML
    appWindow.loadFile('./index.html');

    //Cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show',()=>{
        appWindow.show();
    });
}

app.on('ready',crearVentana);