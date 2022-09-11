import React, {useState} from "react" 
import "./ItemCount.css";


const ItemCount = ({stock,onAdd}) =>{

    const [contador,setContador]= useState(1);

    const agregar =()=>{
        if (contador<stock){
            setContador(contador+1);

        }
       
    }
    const quitar =()=>{
        if (contador>1){
            setContador(contador-1)

        }
    }
    const devolver =()=>{
        onAdd(contador)

    }
    

    return (
        <div class="contenedorContador">
            <h1>contador</h1>
            <h2>{contador}</h2>
            <button onClick={agregar}>+</button>
            <button onClick={quitar}>-</button>
            <button onClick={devolver}>Agregar al carrito</button>
        </div>
   
    );
  }
  
export default ItemCount;