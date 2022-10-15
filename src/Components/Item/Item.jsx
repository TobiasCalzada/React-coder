import "./Item.css";
import {Link} from "react-router-dom";


const Item =({producto})=>{

    return(
        <>
            <div className="tarjetaProducto">
                <h2>{producto.producto}</h2>
                <img src={producto.imagen} alt="" />
                <h3>${producto.precio}</h3>
                <Link to={`producto/${producto.id}`}>Ver más</Link>
              
            </div>
           
        </>
    )

}
export {Item}