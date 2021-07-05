import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import clienteAxios from './config/axios';
//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';
function App() {

  //State de la app
  const [citas,guardarCitas] = useState([]);
  const [consultar,guardarConsultar] = useState(true);//Esta como true porque quiero que la primera vez consulte la api

  useEffect(()=>{//Buen lugar para consumir una API externa
    if (consultar) {
      const consultarAPI = ()=>{
        clienteAxios.get('/pacientes')
          .then(respuesta=>{
              //Colocar en el state el resultado
              guardarCitas(respuesta.data);

              //Deshabilitar consulta
              guardarConsultar(false);
          })
          .catch(error=>{
            console.log(error);
          })
      }
      consultarAPI();
    }
    
  },[consultar]);//[] son las dependecias

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/"
          component = {()=> <Pacientes citas={citas} />}
        />

        <Route 
          exact 
          path="/nueva"
          component = {()=><NuevaCita guardarConsultar={guardarConsultar} />}
        />

      <Route 
          exact 
          path="/cita/:id"
          render={(props)=>{
            //higher order function
            const cita = citas.filter(cita=>cita._id === props.match.params.id)
            return(
              <Cita
                cita={cita}
              />
            )
          }}
        />    
      </Switch>
    </Router>
  );
}

export default App;
