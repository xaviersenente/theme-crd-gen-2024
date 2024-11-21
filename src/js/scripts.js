import Flickity from "flickity";
import Headroom from "headroom.js";

// AFFICHAGE DU MENU POUR LE MOBILE

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

// AFFICHAGE DU FORMULAIRE DE RECHERCHE
const openCtrl = document.querySelector(".header__search");
const closeCtrl = document.querySelector(".searchForm__close");
const searchContainer = document.querySelector(".searchForm");
const inputSearch = document.querySelector(".searchForm__input");

function openSearch() {
  searchContainer.classList.add("searchForm--open");
  inputSearch.focus();
}

function closeSearch() {
  searchContainer.classList.remove("searchForm--open");
  inputSearch.value = "";
}

openCtrl.addEventListener("click", openSearch);
closeCtrl.addEventListener("click", closeSearch);

// PARAMETRAGE CAROUSEL FLICKITY

const carousel = document.querySelector(".carousel");
if (carousel) {
  const flkty = new Flickity(carousel, {
    wrapAround: true,
    imagesLoaded: true,
    lazyLoad: 3,
    cellAlign: "left",
    arrowShape:
      "M44.314 64.142L31.586 51.414a2 2 0 010-2.828l12.728-12.728a2 2 0 112.828 2.828L37.828 48H73v4H37.828l9.314 9.314a2 2 0 11-2.828 2.828z",
  });
}

// PARAMETRAGE POUR LE HEADER AVEC HEADROOM
const navBar = document.querySelector(".headroom");
if (navBar) {
  const headroom = new Headroom(navBar, {
    offset: 200,
  });
  headroom.init();
}
