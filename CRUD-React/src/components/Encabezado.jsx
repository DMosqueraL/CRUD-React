import { Fragment } from "react";
import "../estilosCSS/Encabezado.css";

const Encabezado = (props) => {
  return (
    <Fragment>
      <div className="contenedor-encabezado">
        <div className="row">
          <div className="col-md-6">
            <img
              className="imagen-encabezado"
              src={require(`../imagenes/logo-SofkaU.png`)}
              alt="Logo Sofka U"
            />
          </div>
          <div className="col-md-6">
            <div className="cotenedor-texto-encabezado">
              <p className="nombre-proyecto">
                <strong>{props.titulo}</strong>
              </p>
              <p className="frase-encabezado">{props.frase}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Encabezado;