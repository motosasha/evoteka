import ready from "../../js/utils/documentReady.js";
import openNav from "../../js/common/openNav.js";

ready(function () {
  // close nav
  const navLinks = document.querySelectorAll(".nav__link");
  const navHeaderLinks = document.querySelectorAll(".header__nav-item");

  [...navLinks, ...navHeaderLinks].forEach((item) => {
    item.addEventListener("click", openNav);
    item.addEventListener("click", clickHandler);
  });

  function clickHandler(e) {
    const href = this.getAttribute("href");
    if (href.indexOf("#") === 0) {
      e.preventDefault();
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }
});
