import "./Item.css";
import {Link} from "react-router-dom";

const Item =({producto})=>{

    return(
        <>
            <div className="tarjetaProducto">
                <h2 className="tituloDeCardJuego">{producto.producto}</h2>
                <img className="imgContenedorCard" src={producto.imagen} alt={"imagen de" + " " +producto.producto} />
                <h3 className="precioDeLaCard">${producto.precio}</h3>
                <Link className="categoria" to={`categoria/${producto.categoria}`}><p>{producto.categoria}</p></Link>

                <section className="bgDark btnContainer">
                    <div className="btnItem">
                        <Link to={`producto/${producto.id}`}>
                            <button className="btnGhost round">Ver Detalle</button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export {Item}