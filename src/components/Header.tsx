import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Veer<span>Cards</span></h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </div>
        
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#categories" className="nav-link" onClick={() => setIsMenuOpen(false)}>Categories</a></li>
            <li><a href="#featured" className="nav-link" onClick={() => setIsMenuOpen(false)}>Featured</a></li>
            <li><a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;