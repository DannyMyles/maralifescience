import "./navbar.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="navbar__logo">MARA LIFESCIENCES LTD</div>
      <ul className="navbar__menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="navbar__menuItem--active"
            className="navbar__menuItem"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brands"
            activeClassName="navbar__menuItem--active"
            className="navbar__menuItem"
          >
            Our Brands
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="navbar__menuItem--active"
            className="navbar__menuItem"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
