import React from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../CartContext/CartContext";
import { User } from "../User/User";
import {db} from "../../firebase/firebase"
import {addDoc, collection, serverTimestamp, doc,updateDoc} from "firebase/firestore"
import { useState } from "react";

const Cart = () =>{ // recibir por props la data del usr

    const {cart, precioTotal, removeItem,clear}=useContext(Context); 

    const [muestraID,setMuestraID]=useState(false);
    const [form,setForm]=useState(false);
    const [idCompra,setIdCompra]=useState("");

    const [nombre,setNombre]= useState("");
    const [apellido,setApellido]= useState("");
    const [email,setEmail]= useState("");
    const [datosComprador,setDatosComprador]= useState({});

    const handlerName = (e)=>{
        setNombre(e.target.value)
    }
    const handlerApellido = (e)=>{
        setApellido(e.target.value)
    }
    const handlerEmail = (e)=>{
        setEmail(e.target.value)
    }     
    const handlerClick = ()=>{
        setDatosComprador({nombre,apellido,email})
        const coleccionVentas=collection(db,"ventas");
        addDoc(coleccionVentas,{
            nombre: datosComprador.nombre,
            apellido: datosComprador.apellido,
            email: datosComprador.email,
            items: cart,
            fecha: serverTimestamp(),
            precioTotal,
        })
        .then(rdo=>{
            setIdCompra(rdo.id);
            clear();
            setForm(false)
            setMuestraID(true);
            setTimeout(()=>{
                setMuestraID(false);
            },5000)
        })
    }


    const finalizarCompra = ()=>{
        setForm(true)
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

           {form&& <>
                <input type="text" placeholder="Nombre" onChange={handlerName} />
                <input type="text" placeholder="Apellido" onChange={handlerApellido} />
                <input type="email" placeholder="E-mail" onChange={handlerEmail} />
                <button onClick={handlerClick}>Agregar</button>
            </>}

            {muestraID&& <>
                <h2>Su id de compra es: {idCompra} </h2>
            </>}


        </>
   
    );
  } 
  
export default Cart;