import React from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';

import './index.css';
function App() {
  return (
    <div className="App">
      <Header 
      titulo='Clima App'>
      </Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario></Formulario>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
