import React from "react";
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
        .catch(()=>{
          console.log("Firebase no está funcionando")
        })

          .finally(()=>{
            setLoading(false)
          })
      },[])

    return (
        <>
          {loading ? <p>Cargando...</p> : <ItemDetail listaProd={listaProd}/>}
        </>
    );
  } 
  
export default ItemDetailContainer;