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

        <form onSubmit={handleSubmit} className="form">
          <div className="input-container">
            <label htmlFor="firstName" className="label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName" className="label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className="input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="label">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone" className="label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              className="input"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </footer>
    </>
  );
};

export default Footer;
