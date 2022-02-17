import { Link } from "react-router-dom";

export function Menu() {
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/saved">Saved Trips</Link>
      </li>
      <li>
        <Link to="/spontenous">Feeling Spontenous?</Link>
      </li>
    </ul>
  );
}
