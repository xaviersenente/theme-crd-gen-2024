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
