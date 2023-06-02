import "./navbar.css";
import { NavLink } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
const Navbar = () => {
  const navLinkStyles = ({isActive}:any) =>{
    return{
      fontWeight : isActive ? "bold" : "italic",
      textDecoration: isActive ? "underline" : "none"
      padding
    }
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="assets/maralogo.png" alt="logo" />
          MARA LIFESCIENCES LTD
        </div>
        <ul className="navbar__menu">
          <li>
            <NavLink style={navLinkStyles} to="/" className="navbar__menuItem active">
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
