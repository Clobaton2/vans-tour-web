// JavaScript para el slider de imágenes
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 5000);  // Cambia la imagen cada 5 segundos
