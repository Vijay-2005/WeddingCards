import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import CardCategories from './components/CardCategories'
import FeaturedCards from './components/FeaturedCards'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DecorativeElements from './components/DecorativeElements'

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* Hero section with decorative elements */}
      <div className="hero-container" style={{ position: 'relative' }}>
        <DecorativeElements />
        <Hero />
      </div>
      
      <AboutUs />
      <CardCategories />
      <FeaturedCards />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* WhatsApp floating button */}
      <a 
        href="https://wa.me/911234567890" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        📱
      </a>
    </div>
  )
}

export default App
