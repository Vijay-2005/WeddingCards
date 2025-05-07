import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  // Use the scroll animation hook
  useScrollAnimation();
  
  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "VeerCards created the most beautiful wedding invitations for our special day. The quality and design exceeded our expectations!",
      name: "Priya & Rahul",
      location: "Delhi",
      image: "/src/assets/images/testimonial1.jpg",
    },
    {
      id: 2,
      text: "We received countless compliments on our wedding cards. The attention to detail and customer service was outstanding.",
      name: "Anjali & Vikram",
      location: "Mumbai",
      image: "/src/assets/images/testimonial2.jpg",
    },
    {
      id: 3,
      text: "Thank you for the rush delivery of our wedding cards. The quality was fantastic despite the short timeline!",
      name: "Meera & Arjun",
      location: "Jaipur",
      image: "/src/assets/images/testimonial3.jpg",
    },
  ];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-title fade-in">
          <h2 className="modern-gradient-text">Words from Happy Couples</h2>
          <p>See what our customers say about their VeerCards experience</p>
        </div>
        <div className="grid testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card glass-effect stagger-item">
              <div className="quote-icon">❝</div>
              <div className="testimonial-text">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/100x100/e8d9b5/333?text=${testimonial.name.charAt(0)}`;
                  }}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;