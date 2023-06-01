import "./footer.css";
import { RiMailLine } from "react-icons/ri"
import { LuPhone } from "react-icons/lu"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
          <ul className="footer-social-media">
            <li> <RiMailLine /> P.0 Box 40085-00100, Nairobi,Kenya</li>
            <li> <LuPhone /> +254 715 081 336/+254 768 467 999</li>
            <li>office@maralifesciences.co.ke</li>
            <li>maralifesciences.co.ke</li>
          </ul>
        </div>
        <div className="footer-form">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
