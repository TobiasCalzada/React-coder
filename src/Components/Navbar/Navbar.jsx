import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import "./Navbar.css"
import Logo from "../logo/Logo";

const Navbar = () =>{
    return (
        <header className="header">
            <Logo/>
            <div className="containerNav">
                <div className="navBar">
                    <ul>
                        <li><Link className="Link" to="/">inicio</Link></li>
                        <li><Link className="Link" to="/categoria/Guerra">Guerra</Link></li>
                        <li><Link className="Link" to="/categoria/Aventura">Aventura</Link></li>
                        <li><Link className="Link" to="/categoria/Terror">Terror</Link></li> 
                        <CartWidget/>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
