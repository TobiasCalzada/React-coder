import React from "react";
import logo from "../../assets/logo1.jpg"
import "./Navbar.css"

const Navbar = () =>{
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Adiestramiento Canino Jirok</h1>
            <nav>
                <a href="">Cursos</a>
                <a href="">Seminarios</a>
                <a href="">Contenido de la Escuela</a>
            </nav>
        </header>
   
    );
  }
  
  export default Navbar;
  