import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {Link} from "react-router-dom";


const ItemDetail = ({listaProd})=>{

    const [agregado,setAgregado]=useState(false)

    const onAdd= (contador)=>{
       setAgregado(true)
    }

    return (
        <div class="producto">
            <h1>{listaProd.producto}</h1>
            <img src={listaProd.imagen}/>
            <p>{listaProd.descripcion}</p>
            <h3>${listaProd.precio}</h3>
            { !agregado ? <ItemCount stock={10} onAdd={onAdd}/> :  <Link to="/cart"><button>Ver Carrito</button></Link> }
        </div>

    )
}
export  {ItemDetail}