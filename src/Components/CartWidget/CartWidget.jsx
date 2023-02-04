import React from "react";
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import "./CartWidget.css"


const CartWidget = () =>{
  const {cantElem}=useContext(Context);

    return (
        <div className="contenedorDeTodoElCarrito">
            <Link className="linkCarrito" to="/cart">
                <AiOutlineShoppingCart className="carrito"/>
                <div className="cantEnElCarrito">{cantElem!==0&&  <p>{cantElem}</p>}</div>
            </Link>
        </div>
    );
  }
  
export {CartWidget};