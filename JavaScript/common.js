document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".main_visual .swiper");
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    loop: true,
    speed: 700,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main_visual .swiper-pagination",
      clickable: true,
    },
  });
});
