import ready from "../../js/utils/documentReady.js";

ready(function () {
  const tagHost = document.querySelector(".tags");

  if (tagHost) {
    const activeTag = tagHost.querySelector(".tags__link--active");
    const tagScroll = tagHost.querySelector(".tags__scroll");

    centerTag(tagScroll, activeTag);

    window.addEventListener("resize", () => {
      centerTag(tagScroll, activeTag);
    });

    const slider = tagScroll;
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }
});

function centerTag(scroll, active) {
  if (active.offsetLeft > window.innerWidth / 2) {
    scroll.scrollTo({
      top: 0,
      left: active.offsetLeft - window.innerWidth / 2 + active.offsetWidth / 2,
      behavior: "smooth",
    });
  }
}
