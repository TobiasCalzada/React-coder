import React from "react";
import {useState,useEffect} from "react"

export const User = () =>{

    const [nombre,setNombre]= useState("")
    const [apellido,setApellido]= useState("")
    const [email,setEmail]= useState("")
    const [datos,setDatos]= useState({})

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
        setDatos({nombre,apellido,email})
    }

    return (

        <>
            <input type="text" placeholder="Nombre" onChange={handlerName} />
            <input type="text" placeholder="Apellido" onChange={handlerApellido} />
            <input type="email" placeholder="E-mail" onChange={handlerEmail} />
            <button onClick={handlerClick}>Agregar</button>
        </>
   
    );
} 
