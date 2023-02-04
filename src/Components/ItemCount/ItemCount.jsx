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
        <div className="contenedorContador">
            <h4 className="contador">Cantidad: {contador}</h4>
            <div className="botonesContador">
                <section><button onClick={quitar}>-</button></section>
                <section><button onClick={devolver}>Agregar al carrito</button></section>
                <section><button onClick={agregar}>+</button></section>
            </div>
        </div>
    );
}
export default ItemCount;