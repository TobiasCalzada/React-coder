import React from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import { User } from "../User/User";
import { useState } from "react";
import "./Cart.css";
import Swal from "sweetalert2";

const Cart = () =>{ 

    const {cart, precioTotal, removeItem,clear}=useContext(Context); 
    const [form, setForm]= useState(false);
    const finalizarCompra = ()=>{
        setForm(true);
    }
    
    return (
        <div className="contenedorTodoCarrito">
            <h3 className="carritoDelCarrito">Carrito</h3>
            {cart.map(producto=>
                <div key= {producto.id} className="producto">
                    <h1>{producto.producto}</h1>

                    <div className="contenedorImgCarrito">
                        <img src={producto.imagen} alt={"imagen de" + " " +producto.producto}/>
                    </div>

                    <p className="descripcionCarrito">{producto.descripcion}</p>

                    <h3 className="precioUnitario">Precio unitario: ${producto.precio}</h3>

                    <p className="cantidadDeCarrito">Cantidad: {producto.cantidad}</p>

                    <h4 className="subtotal">Subtotal: ${producto.precio*producto.cantidad}</h4>

                    <button className="quitarCarrito" onClick={()=>removeItem(producto.id)}>Quitar del carrito❌</button>
                </div>
                
                )}
                
            {cart.length===0 ?  <> <p className="NoProductos">No se han agregado productos al carrito</p><Link className="volverAGaleria" to="/">Ver productos</Link></> : 
            
            <>
                {form&&<User/>} 
                <div className="infoCarrito">
                    <h3 className="precio">Precio total: $ {precioTotal} </h3>
                    <button className="botonCarrito" onClick={()=>clear()}>Vaciar carrito</button>
                    <button className="botonCarrito" onClick={finalizarCompra}>Finalizar Compra</button>
                </div>
                
            </>
            }
        </div>
    );
} 

export default Cart;