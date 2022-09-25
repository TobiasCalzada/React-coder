import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({listaProd})=>{
    const onAdd= (contador)=>{
        alert(`Fueron agregados ${contador} productos al carrito`)
    }
    return (
        <div class="producto">
            <h1>{listaProd.producto}</h1>
            <img src={listaProd.imagen}/>
            <p>{listaProd.descripcion}</p>
            <h3>${listaProd.precio}</h3>
            <ItemCount stock={10} onAdd={onAdd}/>
        </div>

    )
}
export  {ItemDetail}