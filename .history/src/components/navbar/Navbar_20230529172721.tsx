import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar__logo">MARA LIFESCIENCES LTD</div>
      <ul className="navbar__menu">
        <li className="navbar__menuItem">Home</li>
        <li className="navbar__menuItem">Our Brands</li>
        <li className="navbar__menuItem">Contact Us</li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
