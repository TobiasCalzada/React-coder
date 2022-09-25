import React from "react";
import { productos } from "../../utils/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom";


const ItemDetailContainer = () =>{

    const {id}= useParams();
    const [listaProd,setListaProd]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(() => {
        setLoading(true)
        customFetch(productos)
            .then(res=>{
                setLoading(false)
                setListaProd(res.find(item=>item.id === parseInt (id))) // hardcodeo para ya tener la logica de poder renderizar 1 solo elemento, no el array completo
        })
    },[])

    return (

        <>

            {loading ? <p>cargando...</p> : <ItemDetail listaProd={listaProd}/>}
        </>
   
    );
  } 
  
export default ItemDetailContainer;