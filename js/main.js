// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");
const body = document.querySelector("body");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

// window.addEventListener("scroll", scrollFunc);
// function scrollFunc() {
//   const header = document.querySelector("header");
//   console.log(window.scrollY);
//   if (window.scrollY > 50) {
//     header.style.backgroundColor = "#195a4f";
//   } else {
//     header.style.backgroundColor = "";
//   }
// }

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    body.classList.add("overflow");
    navItems.forEach(item => item.classList.add("show"));
    main.classList.add("hide");

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    body.classList.remove("overflow");
    main.classList.remove("hide");

    // Set Menu State
    showMenu = false;
  }
}
