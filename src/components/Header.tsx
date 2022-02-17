import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Menu } from "./Menu";

export function Header() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="main-header-container">
        <div className="logo">Uncharted Events </div>
        <nav>
          <Menu></Menu>
        </nav>

        <button
          className="menu-mobile"
          onClick={() => setShow((s) => !s)}
        ></button>
        <div className="links" style={{ display: show ? "block" : "none" }}>
          <Menu></Menu>
        </div>
      </header>
    </div>
  );
}
