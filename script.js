const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fadeElements.forEach((el) => observer.observe(el));

const heroTrack = document.querySelector(".hero-slider-track");
let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % 2;
  heroTrack.style.transform = `translateX(-${currentSlide * 50}%)`;
}, 4000);