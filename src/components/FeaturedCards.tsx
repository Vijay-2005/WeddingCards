import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FeaturedCards = () => {
  // Use the scroll animation hook
  useScrollAnimation();
  
  // Sample data for featured cards
  const featuredCards = [
    {
      id: 1,
      title: 'Royal Elegance',
      price: '₹150',
      description: 'Luxurious gold-foiled wedding invitation with embossed details',
      image: '/src/assets/images/card1.jpg',
    },
    {
      id: 2,
      title: 'Floral Bliss',
      price: '₹120',
      description: 'Beautiful floral design with pastel colors',
      image: '/src/assets/images/card2.jpg',
    },
    {
      id: 3,
      title: 'Modern Minimalist',
      price: '₹100',
      description: 'Clean and elegant design with minimal elements',
      image: '/src/assets/images/card3.jpg',
    },
    {
      id: 4,
      title: 'Traditional Red',
      price: '₹130',
      description: 'Classic red wedding card with traditional motifs',
      image: '/src/assets/images/card4.jpg',
    },
  ];

  return (
    <section className="section featured-section" id="featured">
      <div className="decorative-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      <div className="container">
        <div className="section-title fade-in">
          <h2 className="modern-gradient-text">Our Best Sellers</h2>
          <p>Handcrafted wedding invitations loved by our customers</p>
        </div>
        <div className="grid featured-grid">
          {featuredCards.map((card) => (
            <div key={card.id} className="card neumorphic stagger-item">
              <div className="card-img-container">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="card-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/e8d9b5/333?text=${card.title}`;
                  }}
                />
                <div className="card-badge">{card.price}</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <a href="#contact" className="btn btn-modern">Order Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;