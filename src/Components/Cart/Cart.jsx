import React from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import { User } from "../User/User";
import { useState } from "react";

const Cart = () =>{ 

    const {cart, precioTotal, removeItem,clear}=useContext(Context); 
    const [form, setForm]= useState(false);
    const finalizarCompra = ()=>{
        setForm(true);
    }

    return (

        <>
            <h3>Carrito</h3>
            {cart.map(producto=>
                <div key= {producto.id} className="producto">
                    <h1>{producto.producto}</h1>
                    <img src={producto.imagen}/>
                    <p>{producto.descripcion}</p>
                    <h3>Precio unitario: ${producto.precio}</h3>
                    <p>Cantidad: {producto.cantidad}</p>
                    <h4>Subtotal: ${producto.precio*producto.cantidad}</h4>
                    <button onClick={()=>removeItem(producto.id)}>Quitar del carrito</button>
                </div>
                
                )}
            {cart.length===0 ?  <> <p>No se han agregado productos al carrito</p> <Link to="/">Ver productos</Link> </> : 
            <>
                <p>Precio total: $ {precioTotal} </p>
                <button onClick={()=>clear()}>Vaciar carrito</button>
                <button onClick={finalizarCompra}>finalizar Compra</button>

            </>
            }
            {form&&<User/>}


        </>
   
    );
  } 
  
export default Cart;