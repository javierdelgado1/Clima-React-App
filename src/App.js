import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Error from './Components/Error';

import './index.css';
function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);


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
    console.log(error);
    let componente ;
    if(error){
      componente = <Error mensaje='Ambos campos son obligatorios' ></Error>
    }
    else{
      componente = null
      
    }
    console.log(componente);

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
