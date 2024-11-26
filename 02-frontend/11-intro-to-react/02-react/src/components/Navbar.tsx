import "./Navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink to="/">🏠</NavLink>
        </li>
        <li>
          <NavLink to="/jamal">Jamal</NavLink>
        </li>
        <li>
          <NavLink to="/jane">Jane</NavLink>
        </li>
        <li>
          <NavLink to="/john">John</NavLink>
        </li>
      </ul>
    </nav>
  );
}
