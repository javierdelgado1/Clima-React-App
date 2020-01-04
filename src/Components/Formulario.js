import React, {useState} from 'react'

function Formulario(){

    const  [busqueda, guardarBusqueda] = useState({
        ciudad: "",
        pais: ""
    });

    const handleChange = e =>{

    };
    return (
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <select 
                    onChange={handleChange}
                    name="pais"
                    >
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados unidos</option>
                    <option value="VE">Venezuela</option>
                    <option value="CH">Chile</option>
                    <option value="AR">Argentina</option>

                </select>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima"
                    ></input>
            </div>
        </form>
    )
}

export default Formulario;