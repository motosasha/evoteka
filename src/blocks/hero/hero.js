import ready from "../../js/utils/documentReady.js";
import anime from "animejs/lib/anime.es.js";

ready(function () {
  const heroHost = document.querySelector(".hero");

  if (heroHost) {
    const isAnimated = +localStorage.getItem("isAnimated");
    const pageHeader = document.querySelector(".header");
    //const mainPageLogo = pageHeader.querySelector(".header__logo");
    const heroText = heroHost.querySelector(".hero__text");
    const heroPhrases = heroHost.querySelectorAll(".hero__phrase");
    const heroTimeLine = anime.timeline({
      direction: "normal",
      loop: false,
    });

    for (let phrase of heroPhrases) {
      phrase.innerHTML = phrase.textContent.replace(
        /([A-Za-zА-Яа-яё0-9-,'<>/]+)/g,
        "<span class='word'>$&</span>",
      );
    }

    if (!isAnimated) {
      document.documentElement.classList.add("animate");
      heroTimeLine
        .add({
          targets: ".hero__logo-outline path",
          opacity: [
            {
              value: 1,
              easing: "easeInOutSine",
              delay: 500,
              duration: 1000,
            },
            {
              value: 0,
              easing: "easeInOutSine",
              delay: 3500,
              duration: 1000,
            },
          ],
          strokeDashoffset: [
            {
              value: [anime.setDashoffset, 1000],
              easing: "easeInOutSine",
              duration: 5500,
            },
          ],
        })
        .add(
          {
            targets: ".hero__logo-solid",
            opacity: [0, 1],
            easing: "easeInOutSine",
            delay: 500,
            duration: 1000,
          },
          "-=1500",
        )
        .add({
          targets: ".page__header",
          translateY: [
            {
              value: ["-100%", 0],
              easing: "easeInOutBack",
              duration: 1000,
            },
          ],
          opacity: [
            {
              value: 1,
              easing: "easeInOutBack",
              duration: 500,
            },
          ],
          complete: () => {
            pageHeader.classList.add("header--blur");
          },
        })
        .add(
          {
            targets: ".hero__button",
            opacity: [
              {
                value: 1,
                easing: "easeInOutBack",
                duration: 1000,
              },
            ],
            complete: () => {
              heroText.classList.add("hero__text--visible");
              heroPhrasesAnimation();
              document.documentElement.classList.remove("animate");
            },
          },
          "-=1000",
        )
        .add(
          {
            targets: ".page__button",
            translateY: [
              {
                value: ["30px", 0],
                easing: "linear",
                duration: 1000,
              },
            ],
            opacity: [
              {
                value: [0, 1],
                easing: "linear",
                duration: 1000,
              },
            ],
            complete: () => {
              localStorage.setItem("isAnimated", 1);
            },
          },
          "-=1000",
        );
    } else {
      heroTimeLine
        .add({
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
        })
        .add(
          {
            targets: ".hero__logo-solid",
            opacity: [0, 1],
            easing: "easeInOutSine",
            duration: 250,
          },
          "-=250",
        )
        .add(
          {
            targets: ".hero__button",
            opacity: [
              {
                value: [0, 1],
                easing: "easeInOutBack",
                duration: 250,
              },
            ],
            complete: () => {
              heroText.classList.add("hero__text--visible");
              heroPhrasesAnimation();
            },
          },
          "-=250",
        )
        .add(
          {
            targets: ".page__button",
            opacity: [
              {
                value: [0, 1],
                easing: "linear",
                duration: 250,
              },
            ],
          },
          "-=250",
        );
    }

    // mainPageLogo.addEventListener("click", () => {
    //   window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // });
  }
});

function heroPhrasesAnimation() {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".hero__text .hero__phrase--1 .word",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--1 .word",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 2000,
      delay: (el, i) => 100 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--2 .word",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--2 .word",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 2000,
      delay: (el, i) => 100 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--3 .word",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--3 .word",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 2000,
      delay: (el, i) => 100 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--4 .word",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 500 + 30 * i,
    })
    .add({
      targets: ".hero__text .hero__phrase--4 .word",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 2000,
      delay: (el, i) => 100 + 30 * i,
    });
}
