import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutUs = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-title fade-in">
          <h2>About VeerCards</h2>
          <p>Crafting beautiful memories for your special day</p>
        </div>
        <div className="about-content">
          <div className="about-image fade-in">
            <img 
              src="/src/assets/images/about-us.jpg" 
              alt="Our wedding card printing shop" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/600x400/e8d9b5/333?text=VeerCards";
              }}
            />
          </div>
          <div className="about-text fade-in">
            <h3>Our Story</h3>
            <p>
              Founded in 2010, VeerCards has been creating exquisite wedding invitations that blend traditional 
              craftsmanship with modern designs. Our journey began with a passion for creating beautiful 
              stationery that would capture the essence of each couple's unique love story.
            </p>
            <p>
              With over a decade of experience, we have perfected the art of wedding card printing, using only 
              the finest materials and attention to detail. From elegant traditional designs to contemporary 
              styles, we offer a wide range of options to suit every preference and budget.
            </p>
            <div className="about-features">
              <div className="feature stagger-item">
                <h4>Premium Quality</h4>
                <p>We use only the finest materials to ensure your wedding cards look and feel luxurious.</p>
              </div>
              <div className="feature stagger-item">
                <h4>Custom Designs</h4>
                <p>Work with our designers to create personalized invitations that reflect your style.</p>
              </div>
              <div className="feature stagger-item">
                <h4>Timely Delivery</h4>
                <p>We understand the importance of timing and ensure your cards are delivered on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;