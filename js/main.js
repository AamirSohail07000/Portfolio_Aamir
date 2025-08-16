// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Carousel functionality
document.querySelectorAll('.carousel').forEach(carousel => {
  const inner = carousel.querySelector('.carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const dots = carousel.querySelectorAll('.carousel-dot');
  
  let currentIndex = 0;
  const totalItems = items.length;
  let intervalId;
  
  // Update carousel position and active dot
  function updateCarousel() {
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Go to specific slide
  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetInterval();
  }
  
  // Auto-advance slides
  function startInterval() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 5000);
  }
  
  // Reset interval timer
  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }
  
  // Event listeners
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
    resetInterval();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
    resetInterval();
  });
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index));
    });
  });
  
  // Initialize
  updateCarousel();
  startInterval();
  
  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
  carousel.addEventListener('mouseleave', startInterval);
});