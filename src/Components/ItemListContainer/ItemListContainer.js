import React from "react";
import "./ItemListContainer.css";
const ItemListContainer = ({greeting}) =>{
    return (
        <>
           <h1 class="greeting">{greeting}</h1>
        </>
   
    );
  }
  
export default ItemListContainer;