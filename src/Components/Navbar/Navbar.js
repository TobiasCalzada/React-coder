import React from "react";
import logo from "../../assets/logo1.jpg"
import { CartWidget } from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import "./Navbar.css"

const Navbar = () =>{
    return (
        <header>
            <img src={logo} alt="logo" />
            <Link to="/"><h1>Adiestramiento Canino Jirok</h1></Link>
            <nav>
                <Link to="/categoria/cursos">Cursos</Link>
                <Link to="/categoria/seminarios">Seminarios</Link>
                <Link to="/categoria/accesorios">Accesorios</Link> 
                <CartWidget/>
            </nav>
        </header>
    );
  }
  
  export default Navbar;
  