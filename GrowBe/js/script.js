const testimonialsSlider = new Swiper(".testimonials__slider", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    2300: {
      slidesPerView: 4,
    },
    1900: {
      slidesPerView: 3.4,
    },
    1500: {
      slidesPerView: 2.7,
    },
    1100: {
      slidesPerView: 2.2,
    },
    750: {
      slidesPerView: 1.5,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const blogSlider = new Swiper(".blog__slider", {
  slidesPerView: 2.4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    2300: {
      slidesPerView: 3.3,
    },
    1900: {
      slidesPerView: 2.8,
    },
    1500: {
      slidesPerView: 1.9,
    },
    1100: {
      slidesPerView: 1.5,
    },
    900: {
      slidesPerView: 1.3,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
