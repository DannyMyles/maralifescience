import "./footer.css";
import { RiMailLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <ul className="footer-social-media">
            <li>
              <RiMailLine className="icon" size={30} /> P.0 Box 40085-00100,
              Nairobi,Kenya
            </li>
            <li>
              <LuPhone className="icon" size={30} /> +254 715 081 336/+254 768
              467 999
            </li>
            <li>
              <MdAlternateEmail className="icon" size={30} />{" "}
              office@maralifesciences.co.ke
            </li>
            <li>
              <TbWorldWww className="icon" size={30} /> maralifesciences.co.ke
            </li>
          </ul>
        </div>

        <div className="form-container">
        <h1 className="form-title">Registration</h1>
        <form action="#">
          <div className="main-user-info">
            <div className="user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="gender-details-box">
            <span className="gender-title">Gender</span>
            <div className="gender-category">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-submit-btn">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
      </footer>
    </>
  );
};

export default Footer;
