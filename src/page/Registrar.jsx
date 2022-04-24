import clienteAxios from "../config/axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password].includes("")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return false;
    }

    // Crear el usuario de la APi
    try {
      await clienteAxios.post("/usuarios/registrar", {
        nombre,
        email,
        password,
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario registrado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="base-container">
          <div className="header">Registro</div>
          <div className="content">
            <div className="image"></div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Usuario"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electronico</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Correo Electronico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </div>
      </form>
    </>
  );
};

export default Registrar;
