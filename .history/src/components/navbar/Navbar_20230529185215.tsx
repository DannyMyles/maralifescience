import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">MARA LIFESCIENCES LTD</div>
        <ul className="navbar__menu">
          <li>
            <NavLink to="/" className="navbar__menuItem active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="navbar__menuItem">
              OUR BRANDS
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="navbar__menuItem">
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
