import React from "react";
import { Context } from "../CartContext/CartContext";
import {db} from "../../firebase/firebase";
import {addDoc, collection, serverTimestamp, doc,updateDoc} from "firebase/firestore";
import {Fragment,useState,useContext} from "react";
import "./User.css"

export const User = () =>{

    const [idCompra,setIdCompra]=useState("");
    const [id,mostrarId]=useState(false);
    const {cart, precioTotal,clear}=useContext(Context); 
    const [datosComprador,setDatosComprador]=useState({
        nombre:"",
        apellido:"",
        email:"",
    });

    const handlerOnChange = (e)=>{
        setDatosComprador({...datosComprador, [e.target.name]:e.target.value})
    }
   
    const enviarDatos = (e)=>{
        e.preventDefault();
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

            cart.forEach(producto=>{
                actualizarStock(producto)
            });

            setIdCompra(rdo.id);
            mostrarId(true);

            setTimeout(()=>{
                clear()
            },10000)
            
        })
    }

    const actualizarStock=(producto)=>{
        const updateStock= doc (db,"productos",producto.id);
        updateDoc(updateStock,{stock:(producto.stock-producto.cantidad)});
    }

    return (

        <> 
        {id&&
            <>
                <h2> Su código de compra es: {idCompra}</h2>
                <h2> Guardelo por si necesita hacer un reclamo </h2>
                <h3>Muchas gracias por su compra!</h3>
                <h3 className="advertenciaRoja">En 10 segundos esta página se restaurará...</h3>
            </>
        }

        {!id&&<Fragment> 
            <form className="formulario" onSubmit={enviarDatos}>
                <input className="inputs" type="text" name="nombre" placeholder="Nombre" onChange={handlerOnChange} />
                <input  className="inputs" type="text" name="apellido" placeholder="Apellido" onChange={handlerOnChange} />
                <input  className="inputs" type="email" name="email" placeholder="E-mail" onChange={handlerOnChange} />
                <button className="botonForm" type="submit">Agregar</button>
            </form>
        </Fragment>}

        </>
   
    );
} 
