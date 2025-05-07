import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  // Use the scroll animation hook
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title fade-in">
          <h2 className="modern-gradient-text">Let's Create Your Perfect Invitation</h2>
          <p>Reach out to us for custom designs or inquiries</p>
        </div>
        <div className="contact-container">
          <div className="contact-info fade-in">
            <div className="contact-card neumorphic">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Wedding Street, Mumbai, India</p>
            </div>
            <div className="contact-card neumorphic">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+91 1234567890</p>
            </div>
            <div className="contact-card neumorphic">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@veercards.com</p>
            </div>
          </div>
          <div className="contact-form glass-effect fade-in">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control modern-input"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control modern-input"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control modern-input"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control modern-input"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-modern">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;