import React from "react";
import { Context } from "../CartContext/CartContext";
import {db} from "../../firebase/firebase";
import {addDoc, collection, serverTimestamp, doc,updateDoc} from "firebase/firestore";
import {Fragment,useState,useContext} from "react";
import {getDocs} from "firebase/firestore"

export const User = () =>{

    const [idCompra,setIdCompra]=useState("");
    const [id,mostrarId]=useState(false);
    const {cart, precioTotal,clear}=useContext(Context); 
    const [datosComprador,setDatosComprador]=useState({
        nombre:"",
        apellido:"",
        email:"",
    });

    const [compararStock,setCompararStock]=useState([]);

    const handlerOnChange = (e)=>{
        setDatosComprador({...datosComprador, [e.target.name]:e.target.value})
    }
   
    const enviarDatos = (e)=>{
      /* const coleccionProductos= collection(db,"productos")
        getDocs(coleccionProductos)
        .then((data)=>{
          const arrayProductos= data.docs.map((producto)=>{
           return{
            id:producto.id,
            ...producto.data().stock};
            })
            setCompararStock(arrayProductos)
          });
          compararStock.map((producto) =>{console.log(producto.stock);console.log(producto.id)} )
*/
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
            clear();
            mostrarId(true)

        })
    }

    const actualizarStock=(producto)=>{
        const updateStock= doc (db,"productos",producto.id);
        updateDoc(updateStock,{stock:(producto.stock-producto.cantidad)});
    }



    return (

        <> 
        <Fragment> 
            <form onSubmit={enviarDatos}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handlerOnChange} />
                <input type="text" name="apellido" placeholder="Apellido" onChange={handlerOnChange} />
                <input type="email" name="email" placeholder="E-mail" onChange={handlerOnChange} />
                <button type="submit">Agregar</button>
            </form>
        </Fragment>

        {id&&<><h2> Su código de compra es: {idCompra} </h2><h2> Guardelo por si necesita hacer un reclamo </h2><h3>Muchas gracias por su compra!</h3></>}
        </>
   
    );
} 
