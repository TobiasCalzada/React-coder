import "./Item.css";
const Item =(producto)=>{
    console.log(producto)
    console.log(producto.producto); // sino me devuelve 

    return(
        <>
            <div class="tarjetaProducto">
                <h2>{producto.producto.titulo}</h2>
                <img src={producto.producto.imagen} alt="" />
                <h3>${producto.producto.precio}</h3>
            </div>
           
        </>
    )

}
export {Item}