import { Fragment } from "react";
import "./App.css";
import Encabezado from "./componentes/Encabezado";
import Tabla from "./componentes/Tabla";

function App() {
 
  return (
    <Fragment>
      <div className="App">
        <div className="contenedor-principal">
          <h1>Verificación de Conocimiento - CURSO BÁSICO REACT CRUD</h1>
          <Encabezado
            titulo="CRUD Usando ReactJs"
            frase="El desafío es contigo"
          />          
        </div>
        <div className="tabla-principal">
          <Tabla />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
