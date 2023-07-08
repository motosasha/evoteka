import ready from "../../js/utils/documentReady.js";
import anime from "animejs/lib/anime.es.js";
import { urlPathname, urlSearch, urlHash } from "../../js/utils/hrefGetter";

ready(function () {
  if (localStorage.getItem("isAnimated") === null) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    localStorage.setItem("isAnimated", 0);
  }
  if (urlPathname !== "/" || urlSearch !== "" || urlHash !== "") {
    localStorage.setItem("isAnimated", 1);

    const pageHeader = document.querySelector(".header");
    const pageTimeLine = anime.timeline({
      direction: "normal",
      loop: false,
    });

    pageTimeLine.add({
      targets: ".page__header",
      opacity: [
        {
          value: [0, 1],
          easing: "easeInOutBack",
          duration: 250,
        },
      ],
      complete: () => {
        pageHeader.classList.add("header--blur");
      },
    });
    // .add(
    //   {
    //     targets: ".page__button",
    //     opacity: [
    //       {
    //         //value: [0, 1],
    //         easing: "linear",
    //         duration: 250,
    //       },
    //     ],
    //   },
    //   "-=250",
    // );
  }
});
