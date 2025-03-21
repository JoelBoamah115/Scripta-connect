// Set current year in copyright footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
      element.textContent = currentYear;
    });
  
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
    }
  
    // Animate elements when scrolled into view
    const animateOnScroll = function() {
      const serviceCards = document.querySelectorAll('.service-card');
      const doctorCards = document.querySelectorAll('.doctor-card');
      const featureItems = document.querySelectorAll('.feature-item');
      
      const elements = [...serviceCards, ...doctorCards, ...featureItems];
      
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          setTimeout(() => {
            element.classList.add('animate-fade-in');
          }, index * 100);
        }
      });
    };
  
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial call to animate elements already in view
    animateOnScroll();
  
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
          navbar.style.backgroundColor = 'var(--white)';
          navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.backgroundColor = 'var(--white)';
          navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
      });
    }
  });
  