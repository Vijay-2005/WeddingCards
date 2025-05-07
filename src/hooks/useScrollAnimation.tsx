import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const staggerElements = document.querySelectorAll('.stagger-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe fade-in elements
    fadeElements.forEach((element) => {
      observer.observe(element);
    });
    
    // Observe stagger elements with delay
    staggerElements.forEach((element, index) => {
      observer.observe(element);
      // Add custom delay based on index
      if (element instanceof HTMLElement) {
        element.style.transitionDelay = `${index * 0.1}s`;
      }
    });
    
    // Cleanup
    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
      staggerElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useScrollAnimation;