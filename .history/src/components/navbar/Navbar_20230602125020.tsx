import "./navbar.css";
import { NavLink } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
const Navbar = () => {
  const navLinkStyles = ({isActive}:any) =>{
    return{
      fontWeight : isActive ? "bolder" : "italic",
      textDecoration: isActive ? "underline" : "none",
      padding :isActive ? "20px" : "5px"
    }
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="assets/maralogo.png" alt="logo" />
         <h1>MARA LIFESCIENCES LTD</h1> 
        </div>
        <ul className="navbar__menu">
          <li>
            <NavLink style={navLinkStyles} to="/" className="navbar__menuItem">
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
              CONTACT US <LuPhone class/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
