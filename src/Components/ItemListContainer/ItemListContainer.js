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
        if (categoria==="Guerra"){
          q= query(coleccionProductos,where("categoria","==","Guerra")) 
        }
        else if (categoria==="Aventura"){
          q= query(coleccionProductos,where("categoria","==","Aventura")) 
        }
        else if(categoria==="Terror"){
          q= query(coleccionProductos,where("categoria","==","Terror")) 
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
        .catch(()=>{
          console.log("Firebase no está funcionando")
        })
        .finally(()=>{
          setLoading(false)
        })
    },[categoria])

    return (
      <div className="contenedorDeGreeting">
        <p className="greeting">{greeting}</p>
        <div>{loading ? <p>cargando...</p> : <ItemList listaProd={listaProd}/>}</div>
      </div>

    );
  }
  
export default ItemListContainer;