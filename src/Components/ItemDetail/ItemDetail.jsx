import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { Context } from "../CartContext/CartContext";

const ItemDetail = ({listaProd})=>{

    const [agregado,setAgregado]=useState(false)
    const {addItem}=useContext(Context);

    const onAdd= (contador)=>{
        setAgregado(true);
        addItem(listaProd,contador)
    }

    return (
        <div className="producto">
            <h1 className="tituloDetalle">{listaProd.producto}</h1>
            <div className="contenedorDetalle">
                <img className="imgDetalle" src={listaProd.imagen} alt={"imagen de" + " " + listaProd.producto}/>
            </div>
            <p className="descripcionDetalle">{listaProd.descripcion}</p>
            <h3 className="precioDetalle">${listaProd.precio}</h3>
            { !agregado ? <ItemCount stock={listaProd.stock} onAdd={onAdd}/> :  <><Link to="/cart"><button className="botonesDeCompra">Ver Carrito</button></Link> <Link to="/"><button className="botonesDeCompra">Seguir comprando</button></Link></>}
        </div>

    )
}
export  {ItemDetail}