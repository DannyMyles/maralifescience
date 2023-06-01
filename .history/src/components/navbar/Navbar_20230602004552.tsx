import "./navbar.css";
import { NavLink } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="assets/mar" alt="" />
          MARA LIFESCIENCES LTD
          </div>
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
              CONTACT US <LuPhone />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
