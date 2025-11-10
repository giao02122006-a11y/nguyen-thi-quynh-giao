const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    // Đổi ảnh lớn
    mainImage.src = thumb.src;

    // Thêm hiệu ứng chuyển ảnh
    mainImage.style.opacity = 0;
    setTimeout(() => {
      mainImage.style.opacity = 1;
    }, 150);

    // Cập nhật viền chọn
    thumbnails.forEach((img) => img.classList.remove('active'));
    thumb.classList.add('active');
  });
});