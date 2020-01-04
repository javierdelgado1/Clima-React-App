import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';

import './index.css';
function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');


  const datosConsulta = datos => {
    console.log(datos);

    //validar que ambos campos este

    if(datos.ciudad === '' || datos.pais === ''){
      return;
    }

    //ciudad y pais existe, agregar al state

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
