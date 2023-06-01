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
        <div className="form_container_main">
          <div className="form_container_left">
            <div className="input-container">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="textarea-container">
              <label htmlFor="message">Write your message:</label>
              <textarea id="message"></textarea>
            </div>
          </div>

          < className="form_container_right">
            <div className="input-container">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="input-container">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" />
            </div>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </>

        </div>
      </footer>
    </>
  );
};

export default Footer;
