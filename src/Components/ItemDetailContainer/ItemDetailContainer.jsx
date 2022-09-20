import React from "react";
import { productos } from "../../utils/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () =>{
    const [listaProd,setListaProd]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(() => {
        setLoading(true)
        customFetch(productos)
            .then(res=>{
                setLoading(false)
                setListaProd(res.find(item=>item.id === 1)) // hardcodeo para ya tener la logica de poder renderizar 1 solo elemento, no el array completo
        })
    },[])

    return (

        <>

            {loading ? <p>cargando...</p> : <ItemDetail listaProd={listaProd}/>}
        </>
   
    );
  } 
  
export default ItemDetailContainer;