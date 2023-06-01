import "./footer.css";
import { RiMailLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <ul className="footer-social-media">
            <li>
              <RiMailLine className="icon" size={25} /> P.0 Box 40085-00100,
              Nairobi,Kenya
            </li>
            <li>
              <LuPhone className="icon" size={25} /> +254 715 081 336/+254 768
              467 999
            </li>
            <li>
              <MdAlternateEmail className="icon" size={25} />{" "}
              office@maralifesciences.co.ke
            </li>
            <li>
              <TbWorldWww className="icon" size={25} /> maralifesciences.co.ke
            </li>
          </ul>
          <div className="social_container">
            <span>Follow us on social media:</span>
            <ul>
              <li>
                <FaFacebookF size={25} />
              </li>
              <li>
                <LuTwitter size={25} />
              </li>
              <li>
                <FiLinkedin size={25} />
              </li>
              <span>@maralife-sciences </span>
            </ul>
          </div>
        </div>

        <div className="form_container_maim">
          <div className="form_container">
            <form action="#" autoComplete="off">
              <div className="main-user-info">
                <div className="user-input-box">
                  <label htmlFor="fullName">First Name</label>
                  <input type="text" id="fullName" name="fullName" />
                </div>
                <div className="user-input-box">
                  <label htmlFor="username">Last name</label>
                  <input type="text" id="username" name="username" />
                </div>
                <div className="user-input-box">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="user-input-box">
                  <label htmlFor="phoneNumber">Phone Number (optional)</label>
                  <input type="text" id="phoneNumber" name="phoneNumber" />
                </div>
                <div className="user-input-box">
                  <label htmlFor="password">Write a message</label>
                  <textarea></textarea>
                </div>
                <div className="form-submit-btn">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
          <div className="copyright">
            <span>©maralifesciences 2023 • All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
