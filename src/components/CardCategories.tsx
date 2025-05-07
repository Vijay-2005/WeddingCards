import useScrollAnimation from '../hooks/useScrollAnimation';

const CardCategories = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  // Sample data for card categories
  const categories = [
    {
      id: 1,
      title: 'Traditional Cards',
      description: 'Classic designs with cultural elements',
      image: '/src/assets/images/traditional.jpg',
    },
    {
      id: 2,
      title: 'Modern Cards',
      description: 'Contemporary designs with elegant aesthetics',
      image: '/src/assets/images/modern.jpg',
    },
    {
      id: 3,
      title: 'Luxury Cards',
      description: 'Premium invitations with gold foiling and embossing',
      image: '/src/assets/images/luxury.jpg',
    },
    {
      id: 4,
      title: 'Hindu Wedding Cards',
      description: 'Traditional Hindu ceremony invitations',
      image: '/src/assets/images/hindu.jpg',
    },
    {
      id: 5,
      title: 'Muslim Wedding Cards',
      description: 'Beautiful Islamic wedding invitations',
      image: '/src/assets/images/muslim.jpg',
    },
    {
      id: 6,
      title: 'Custom Cards',
      description: 'Personalized designs tailored to your preferences',
      image: '/src/assets/images/custom.jpg',
    },
  ];

  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-title fade-in">
          <h2 className="modern-gradient-text">Explore Our Collections</h2>
          <p>Find the perfect invitation for your special day</p>
        </div>
        <div className="grid categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card modern-card stagger-item">
              <div className="category-img-container">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="category-img"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x400/e8d9b5/333?text=${category.title}`;
                  }}
                />
              </div>
              <div className="category-overlay glass-effect">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <a href="#contact" className="btn-modern">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCategories;