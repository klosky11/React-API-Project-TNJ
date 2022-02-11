import { Link } from "react-router-dom";
import "./header.css"


export function Header() {

    return (
      <div>
        <header>
          {/* just some placeholder text and background for now */}
            <h1>Plan your getaway and your play</h1>
            
        </header>

        <nav>
        <Link to= "/home">Home</Link>
        <Link to= "/saved">Saved Trips</Link>
        <Link to= "/spontenous">Feeling Spontenous?</Link>
        
        </nav>

        </div>
    );
}
