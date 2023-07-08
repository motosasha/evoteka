import ready from "../../js/utils/documentReady.js";
import anime from "animejs";

ready(function () {
  const workHost = document.querySelector(".work");

  if (workHost) {
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
          const svgPath = svg.querySelector("path");
          const signAnimation = anime(animationOptions(svgPath));
          svg.style.opacity = 1;
          signAnimation.play();
          observer.unobserve(svg);
        }
      });
    }, options);

    const targets = document.querySelectorAll(".work__tile svg");
    targets.forEach((i) => {
      observer.observe(i);
    });
  }
});
