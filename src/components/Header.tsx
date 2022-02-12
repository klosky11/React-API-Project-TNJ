import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Menu } from "./Menu";

export function Header() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="main-header">
        <button className="menu-mobile" onClick={() => setShow(true)}></button>
        <div className="links" style={{ display: show ? "block" : "none" }}>
          <Menu></Menu>
        </div>
        <div className="site-name"> Site Name</div>
        <div className="logo"> LOGO </div>
      </header>

     
    </div>
  );
}
