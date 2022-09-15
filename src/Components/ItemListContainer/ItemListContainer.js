import React from "react";
import "./ItemListContainer.css";
import { productos } from "../../utils/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import {ItemList} from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) =>{

    const [listaProd,setListaProd]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(() => {
        setLoading(true)
        customFetch(productos)
        .then(res=>{
          setLoading(false)
          setListaProd(res)
        })
    },[])

    return (
        <>
           <h1 class="greeting">{greeting}</h1>
           {loading ? <p>cargando...</p> : <ItemList listaProd={listaProd}/>}
        </>
   
    );
  }
  
export default ItemListContainer;