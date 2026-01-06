// Data Science Portfolio - Interactive Features

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation to project cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply observer to project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Add hover effect to skill items
document.querySelectorAll('.skill-category li').forEach(skill => {
  skill.addEventListener('mouseover', function() {
    this.style.color = '#00D9FF';
    this.style.paddingLeft = '10px';
    this.style.transition = 'all 0.3s ease';
  });
  
  skill.addEventListener('mouseout', function() {
    this.style.color = '#E0E0E0';
    this.style.paddingLeft = '0';
  });
});

// Navbar sticky effect with shadow
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 8px 40px rgba(0, 217, 255, 0.2)';
  } else {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.1)';
  }
});

// Console message
console.log('%c👋 Welcome to Kaustubh Patil\'s Data Science Portfolio!', 'font-size: 16px; color: #00D9FF; font-weight: bold;');
console.log('%cLet\'s build amazing data solutions together!', 'font-size: 14px; color: #4ECDC4;');

// Add active state to navbar links on scroll
window.addEventListener('scroll', function() {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
