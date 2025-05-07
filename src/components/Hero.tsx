import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Create Unforgettable Moments with <span>VeerCards</span></h1>
          <p>Exquisite wedding invitations that capture the essence of your love story</p>
          <div className="hero-buttons">
            <a href="#categories" className="btn btn-primary">Browse Collection</a>
            <a href="#contact" className="btn btn-secondary">Request Custom Design</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;