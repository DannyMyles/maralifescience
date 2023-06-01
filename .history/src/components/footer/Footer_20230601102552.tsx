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
        <div className="footer-form">
          <h3>Contact Us</h3>
          <form>
            <div className="footer-"></div>
            <div className="footer_left">
              <label htmlFor="firstname">First Name</label>
              <input type="text" />
              <label htmlFor="emailadress">Email Adress</label>
              <input type="text" />
              <textarea name="messa">Write your massage</textarea>
            </div>

            <div className="footer_right">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" />
              <label htmlFor="Phone">Phone Number(optional)</label>
              <input type="number" />
              <label htmlFor="business">Business / Organization</label>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
