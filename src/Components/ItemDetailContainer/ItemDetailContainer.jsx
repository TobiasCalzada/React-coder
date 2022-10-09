import React from "react";
import { productos } from "../../utils/productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom";
import {db} from "../../firebase/firebase"
import {doc, getDoc, collection} from "firebase/firestore"

const ItemDetailContainer = () =>{

    const {id}= useParams();
    const [listaProd,setListaProd]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(() => { 
        setLoading(true)
          const coleccionProductos= collection(db,"productos")
          const refDoc= doc(coleccionProductos,id)
          getDoc(refDoc)
          .then((rdo)=>{
            setListaProd({id:rdo.id,...rdo.data()})
        })

          .finally(()=>{
            setLoading(false)
          })
      },[])

    /*useEffect(() => {
        setLoading(true)
        customFetch(productos)
            .then(res=>{
                setLoading(false)
                setListaProd(res.find(item=>item.id === parseInt (id))) // hardcodeo para ya tener la logica de poder renderizar 1 solo elemento, no el array completo
        })
    },[])*/

    return (
        <>
            {loading ? <p>cargando...</p> : <ItemDetail listaProd={listaProd}/>}
        </>
   
    );
  } 
  
export default ItemDetailContainer;