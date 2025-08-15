// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});