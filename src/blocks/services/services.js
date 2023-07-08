import ready from "../../js/utils/documentReady.js";
import anime from "animejs/lib/anime.es.js";
import Swiper, { Pagination, Navigation } from "swiper";

ready(function () {
  const servicesHost = document.querySelector(".services");

  if (servicesHost) {
    const animationOptions = (target) => {
      return {
        targets: target,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 2500,
        delay: function (el, i) {
          return i * 250;
        },
        direction: "normal",
        loop: false,
      };
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const svg = entry.target;
          const svgPaths = svg.querySelectorAll("path");
          svg.style.opacity = 1;
          svgPaths.forEach((path) => {
            const signAnimation = anime(animationOptions(path));
            signAnimation.play();
          });
          observer.unobserve(svg);
        }
      });
    }, options);

    const reviewsSlider = document.querySelector(".services__slider");
    const reviewsSlides = reviewsSlider.querySelectorAll(".services__slider-slide");
    const firstSvg = reviewsSlides[0].querySelectorAll("svg");
    firstSvg.forEach((i) => {
      observer.observe(i);
    });

    const reviewsSwiperSlider = new Swiper(reviewsSlider, {
      modules: [Pagination, Navigation],
      spaceBetween: 30,
      pagination: {
        el: ".services__slider-pagination",
      },
      navigation: {
        nextEl: ".services__slider-next",
        prevEl: ".services__slider-prev",
      },
    });
    reviewsSwiperSlider.on("slideChange", () => {
      const currentSvg = reviewsSlides[reviewsSwiperSlider.activeIndex].querySelector("svg");
      const svgPaths = currentSvg.querySelectorAll("path");
      currentSvg.style.opacity = 1;
      svgPaths.forEach((path) => {
        const signAnimation = anime(animationOptions(path));
        signAnimation.play();
      });
    });
    reviewsSwiperSlider.on("slideChange", () => {
      const prevSvg = reviewsSlides[reviewsSwiperSlider.previousIndex].querySelector("svg");
      prevSvg.style.opacity = 0;
    });
  }
});
