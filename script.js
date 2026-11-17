// Mobile navigation toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
}

// Hero background slider rotation
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5500);
}

// Lightbox modal functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(el) {
  if (!lightbox || !lightboxImg) return;
  const img = el.querySelector('img');
  if (img) {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

// Cinematic Video Play Functionality
function playCinemaVideo() {
  const container = document.getElementById('videoContainer');
  const video = document.getElementById('cinemaVideo');
  
  if (container && video) {
    container.classList.add('playing');
    video.play();
  }
}
