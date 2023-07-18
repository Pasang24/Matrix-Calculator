import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header-wrapper">
      <NavLink
        className={({ isActive }) =>
          isActive ? "route active-route" : "route"
        }
        to="/matrix"
      >
        Matrix
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "route active-route" : "route"
        }
        to="/linear"
      >
        Linear Algebra
      </NavLink>
    </nav>
  );
}

export default Header;
