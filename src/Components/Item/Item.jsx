import "./Item.css";
const Item =({producto})=>{

    return(
        <>
            <div class="tarjetaProducto">
                <h2>{producto.titulo}</h2>
                <img src={producto.imagen} alt="" />
                <h3>${producto.precio}</h3>
                <button>Ver descripción</button>
            </div>
           
        </>
    )

}
export {Item}