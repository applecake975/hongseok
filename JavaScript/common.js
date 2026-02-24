document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".main_visual .swiper");
  if (!swiperEl) return;

  const mainSlide = new Swiper(swiperEl, {
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main_visual .swiper-pagination",
      clickable: true,
    },
  });

  const toggleBtn = document.querySelector(".btn_box i");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      if (mainSlide.autoplay.running) {
        mainSlide.autoplay.stop();
        this.classList.remove("fa-pause");
        this.classList.add("fa-play");
      } else {
        mainSlide.autoplay.start();
        this.classList.remove("fa-play");
        this.classList.add("fa-pause");
      }
    });
  }
});
