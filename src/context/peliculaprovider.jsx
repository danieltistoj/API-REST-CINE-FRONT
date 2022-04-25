import axios from "axios";

const ObtenerPelicula = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [director, setDirector] = useState("");
    const [duracion, setDuracion] = useState("");
    const [imagen, setImagen] = useState("");
    const [modificador, setModificar] = useState("");

    //Registrar pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/registrar", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

      //ID pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/getID/:id", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

      //Nombre pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/getNombre/:nombre", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

      //Categoria pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/getCategoria/:categoria", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

      //Director pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/getDirector/:director", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

        //Update pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/update/:id", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

      //Delete pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/delete/:id", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }

      //Todos pelicula
    try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.post("/pelicula/todos", nombre, categoria, director, duracion, imagen, modificador);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }
}