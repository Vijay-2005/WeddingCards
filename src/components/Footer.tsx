const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          <div className="footer-col">
            <h3 className="footer-heading">VeerCards</h3>
            <p>Creating beautiful wedding invitations for your special day. Quality craftsmanship and attention to detail in every card.</p>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">TW</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#home">Home</a></li>
              <li className="footer-link"><a href="#categories">Categories</a></li>
              <li className="footer-link"><a href="#featured">Featured</a></li>
              <li className="footer-link"><a href="#testimonials">Testimonials</a></li>
              <li className="footer-link"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              <li className="footer-link"><a href="#categories">Traditional Cards</a></li>
              <li className="footer-link"><a href="#categories">Modern Cards</a></li>
              <li className="footer-link"><a href="#categories">Luxury Cards</a></li>
              <li className="footer-link"><a href="#categories">Hindu Wedding Cards</a></li>
              <li className="footer-link"><a href="#categories">Muslim Wedding Cards</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-links">
              <li className="footer-link">123 Wedding Street, Mumbai</li>
              <li className="footer-link">info@veercards.com</li>
              <li className="footer-link">+91 1234567890</li>
              <li className="footer-link">Mon-Sat: 10:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} VeerCards. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;