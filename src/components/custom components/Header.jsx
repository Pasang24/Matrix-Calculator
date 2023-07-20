import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

function Header() {
  const handleToggle = () => {
    const sideBar = document.querySelector(".sidebar-wrapper");

    if (sideBar.classList.contains("show-sidebar")) {
      sideBar.classList.remove("show-sidebar");
    } else {
      sideBar.classList.add("show-sidebar");
    }
  };

  return (
    <nav className="header-wrapper">
      <button onClick={handleToggle} className="sidebar-toggle-btn">
        <RxHamburgerMenu size={20} />
      </button>
      <NavLink
        className={({ isActive }) =>
          isActive ? "route active-route" : "route"
        }
        to="/"
      >
        Matrix
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "route active-route" : "route"
        }
        to="/number-system"
      >
        Base-N
      </NavLink>
    </nav>
  );
}

export default Header;
