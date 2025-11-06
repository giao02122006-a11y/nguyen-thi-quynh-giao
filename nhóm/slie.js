const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const total = images.length;

let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index++;
  if (index >= total) index = 0; // quay lại ảnh đầu
  updateSlider();
});

document.getElementById("prev").addEventListener("click", () => {
  index--;
  if (index < 0) index = total - 1; // quay lại ảnh cuối
  updateSlider();
});

function updateSlider() {
  const offset = -index * 210; // 200px ảnh + 10px margin
  slider.style.transform = `translateX(${offset}px)`;
}