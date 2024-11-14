const hamburger = document.querySelector(".menuBurger");
const menu = document.querySelector(".menu");
const page = document.body;

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.ariaExpanded === "true";
    const isClosed = !isOpen;

    hamburger.ariaExpanded = isClosed;
    hamburger.classList.toggle("menuBurger--open", isClosed);
    menu.ariaHidden = isOpen;
    menu.classList.toggle("menu--open", isClosed);
    page.classList.toggle("noscroll", isClosed);
  });
}
