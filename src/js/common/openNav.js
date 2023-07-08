function openNav() {
  let bodyState = document.documentElement.getAttribute("data-state");
  bodyState === "mobile-menu"
    ? (document.documentElement.dataset.state = "")
    : (document.documentElement.dataset.state = "mobile-menu");
}

export default openNav;
