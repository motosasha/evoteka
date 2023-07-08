import ready from "../../js/utils/documentReady.js";
import Swiper, { Pagination } from "swiper";

ready(function () {
  const reviewsHost = document.querySelector(".reviews");

  if (reviewsHost) {
    const breakpoint = window.matchMedia("(min-width:768px)");

    let reviewsSlider;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (reviewsSlider !== undefined) reviewsSlider.destroy(true, true);
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    const enableSwiper = function () {
      reviewsSlider = new Swiper(".reviews__slider", {
        modules: [Pagination],
        loop: true,
        pagination: {
          el: ".reviews__slider-pagination",
        },
        breakpoints: {
          768: {
            destroy: true,
          },
        },
      });
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
  }
});
