import "./footer.css"

const Footer = () => {
  return (
    <>
       <footer className="footer">
      <div className="footer-contact">
        <h3>Contact Information</h3>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <div className="footer-social-media">
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
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
  )
}

export default Footer
