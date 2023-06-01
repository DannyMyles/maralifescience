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

        <div className="form_container">
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
              <label htmlFor="password">Write a message</label>
              {/* @ts */}
              <textarea></textarea>
            </div>
            <div className="form-submit-btn">
            <input type="submit" value="Register" />
          </div>
          </div>
        </form>
      </div>
      </footer>
    </>
  );
};

export default Footer;
