import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../CartContext/CartContext";




const ItemDetail = ({listaProd})=>{

    const [agregado,setAgregado]=useState(false)
    const {addItem}=useContext(Context); // hago una desestructuracion de las fc que puede usar para agarrar solo al additem ya que el itemdetail no necesita usar otra

    const onAdd= (contador)=>{
       setAgregado(true);
       addItem(listaProd,contador)
    }



    return (
        <div className="producto">
            <h1>{listaProd.producto}</h1>
            <img src={listaProd.imagen}/>
            <p>{listaProd.descripcion}</p>
            <h3>${listaProd.precio}</h3>
            { !agregado ? <ItemCount stock={listaProd.stock} onAdd={onAdd}/> :  <><Link to="/cart"><button>Ver Carrito</button></Link> <Link to="/"><button>Seguir comprando</button></Link></>}
        </div>

    )
}
export  {ItemDetail}