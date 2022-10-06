import React from "react";
import "./ItemListContainer.css";
import { productos } from "../../utils/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import {ItemList} from "../ItemList/ItemList"

import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const {categoria}= useParams();
    const [listaProd,setListaProd]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(() => { 
        setLoading(true)
        customFetch(productos)
        .then(res=>{
          if (categoria){
            setLoading(false)
            setListaProd(res.filter(prod=>prod.categoria===categoria))
          }else{
            setLoading(false) //el home
            setListaProd(res)
          }

        })
    },[categoria])

    return (
      <div>
        <h1 className="greeting">{greeting}</h1>
        {loading ? <p>cargando...</p> : <ItemList listaProd={listaProd}/>}
      </div>
   
    );
  }
  
export default ItemListContainer;