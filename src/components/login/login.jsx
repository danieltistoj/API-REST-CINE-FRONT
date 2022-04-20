import React from "react";
import loginImg from "../../movies.png";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Iniciar Sesion</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input type="text" name="username" placeholder="Usuario" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Constraseña</label>
              <input type="password" name="password" placeholder="Contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Ingresar
          </button>
        </div>
      </div>
    );
  }
}
