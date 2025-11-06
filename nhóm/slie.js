const sliderInner = document.querySelector('.slider-inner');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const visibleSlides = 5; // 👈 số hình muốn hiển thị cùng lúc
const totalSlides = slides.length;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  sliderInner.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - visibleSlides) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});