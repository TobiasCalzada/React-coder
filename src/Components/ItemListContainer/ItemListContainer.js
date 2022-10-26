import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import {ItemList} from "../ItemList/ItemList"
import {db} from "../../firebase/firebase"
import {getDocs, collection, query, where} from "firebase/firestore"
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const {categoria}= useParams();
    const [listaProd,setListaProd]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(() => { 
      setLoading(true)
        const coleccionProductos= collection(db,"productos")
        let q= coleccionProductos;
        if (categoria==="cursos"){
          q= query(coleccionProductos,where("categoria","==","cursos")) 
        }
        else if (categoria==="seminarios"){
          q= query(coleccionProductos,where("categoria","==","seminarios")) 
        }
        else if(categoria==="accesorios"){
          q= query(coleccionProductos,where("categoria","==","accesorios")) 
        }
        getDocs(q)
        .then((data)=>{
          const arrayProductos= data.docs.map((producto)=>{
            return {
              ...producto.data(),
              id:producto.id
            }
          })
          setListaProd(arrayProductos)
        })
        .finally(()=>{
          setLoading(false)
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