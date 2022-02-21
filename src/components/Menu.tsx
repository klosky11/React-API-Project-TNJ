import { Link } from "react-router-dom";

export function Menu() {
  return (
    <ul>
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/saved">SAVED TRIPS</Link>
      </li>
      <li>
        <Link to="/spontenous">FEELING SPONTANEOUS</Link>
      </li>
    </ul>
  );
}
