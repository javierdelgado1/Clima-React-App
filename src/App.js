import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Error from './Components/Error';
import axios from 'axios';

import './index.css';
function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  useEffect(() =>{

    if(ciudad === '') return;
    const consultarApi = async () => {
      const appiID = '5d86ce1a8787938d9a4c3a89a5a8606d';
      const url =  `https://samples.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appiID}`;

      console.log(url);
      axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
        'Access-Control-Allow-Origin': 'http://localhost',
        "Content-Type": 'application/json',
     };
     axios.defaults.preflightContinue = true;
      const respuesta = await axios({
                                      method: 'get',
                                      url: url
                                    });
      console.log(respuesta);
      const resultado = await respuesta.json();
      //console.log(resultado);
    }
    consultarApi();

  }, [ciudad, pais]);

  const datosConsulta = datos => {
    console.log(datos);

    //validar que ambos campos este

    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }
      //ciudad y pais existe, agregar al state
      
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
      
  }

    //cargar un componente condicionalmente
    let componente ;
    if(error){
      componente = <Error mensaje='Ambos campos son obligatorios' ></Error>
    }
    else{
      componente = null
      
    }

  return (
    <div className="App">
      <Header 
      titulo='Clima App'>
      </Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}>

                </Formulario>
            </div>
            <div className="col s12 m12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
