import "./ItemDetail.css";
const ItemDetail = ({listaProd})=>{

    return (
        <div class="producto">
            <h1>{listaProd.titulo}</h1>
            <img src={listaProd.imagen}/>
            <p>{listaProd.descripcion}</p>
            <h3>${listaProd.precio}</h3>
        </div>

    )
}
export  {ItemDetail}