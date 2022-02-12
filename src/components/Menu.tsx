import { Link } from "react-router-dom";
import "./menu.css"

export function Menu(){

    return(
        <div className="main-link-div">
        <ul>
        <li><Link to= "/home">Home</Link></li>
        <li><Link to= "/saved">Saved Trips</Link></li>
        <li><Link to= "/spontenous">Feeling Spontenous?</Link></li>
        
        </ul>
        </div>
    )
}