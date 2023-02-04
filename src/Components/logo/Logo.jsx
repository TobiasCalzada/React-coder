import { Link } from "react-router-dom";
import "./Logo.css"

function Logo(){

return (
    <>
        <Link className="LinkDeImg" to="/">
            <div className="logoImagen"></div>
        </Link>
    </>
)
}

export default Logo;