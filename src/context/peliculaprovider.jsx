import axios from "axios";
import { useState, useEffect, createContext } from "react";



const PeliculaContext = () => {


  useEffect(() => {
    const obtenerPeliculas = async () => {
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
    };
    obtenerPeliculas();
  }, []);


    const registrarPelicula = async (pelicula) => {
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
        const { data } = await clienteAxios.post("/pelicula/registrar", pelicula, config);
        console.log(data);
       
      } catch (error) {
        console.log(error);
      }
    }
  
    

    const peliculaID = async (id) => {
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
        const { data } = await clienteAxios.post(`/pelicula/getId/${id}`, config);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }
  }
     
    const getNombrePelicula = async (nombre) => {
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
        const { data } = await clienteAxios.post(`/pelicula/getNombre/${nombre}`, config);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }
    }
      
    const getCategoriaPelicula = async(categoria) => {
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
        const { data } = await clienteAxios.post(`/pelicula/getCategoria/${categoria}`,config);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }

    }
    

    const getDirectorPelicula = async (director) => {
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
        const { data } = await clienteAxios.post(`/pelicula/getDirector/${director}`, config);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }

    }
     

    const updatePelicula = async (pelicula) => {
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
        const { data } = await clienteAxios.post(`/pelicula/update/${pelicula._id}`, pelicula, config);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }
    }
     

    const deletePelicula = async (id) => {
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
        const { data } = await clienteAxios.post(`/pelicula/delete/${id}`,config);
        console.log(data);
      
      } catch (error) {
        console.log(error);
      }
    }


    return (
      registrarPelicula,
      peliculaID,
      getNombrePelicula,
      getCategoriaPelicula,
      getDirectorPelicula,
      updatePelicula,
      deletePelicula
    )
};

export default PeliculaContext;