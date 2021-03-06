//Consumir API
// fetch('http://localhost:4000/pacientes') 
//     .then(respuesta => respuesta.json())
//     .then(datos => mostrarCitas(datos));

fetch('http://localhost:4000/pacientes') 
    .then(respuesta => respuesta.json())
    .then(datos => mostrarCitas(datos))
    .catch(error => console.log(error))



function mostrarCitas(citas){
    console.log(citas);
    const contenedorCitas = document.querySelector('#citas');
    let citasHTML = '';

    citas.forEach(cita => {
        citasHTML += `
        <div class="p-5 list-group-item list-groud-item-action flex-column align-items-start">
            <div class="d-fkex w-100 justify-content-between mb-4">
                <h3  class="mb-3">${cita.nombre}</h3>
                <small class="fecha-alta">
                    ${cita.fecha} - ${cita.hora}
                </small>
            </div>

            <p class="mb-0">
                ${cita.sintomas}
            </p>
            <div class="contacto py-3">
                <p>Dueño : ${cita.propietario}</p>
                <p>Teléfono: ${cita.telefono}</p>

            </div>
        
        </div>
        `
    });

    //Insertar el html
    contenedorCitas.innerHTML = citasHTML;
}