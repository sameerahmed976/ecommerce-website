import { getElement } from "./src/getElement.js";

const hamburger = getElement(".hamburger");
const closeButton = getElement(".close");
const sideNavbar = getElement(".side-navbar");
const cartContainer = getElement(".cart");
const cartOverlay = getElement(".cart-overlay ");
const cartClose = getElement(".cart-close ");

hamburger.addEventListener("click", () => {
  //   console.log("click");
  sideNavbar.classList.add("show-side-bar");
});
closeButton.addEventListener("click", () => {
  //   console.log("click");
  sideNavbar.classList.remove("show-side-bar");
});
cartContainer.addEventListener("click", () => {
  //   console.log("click");
  cartOverlay.classList.add("show-cart-overlay");
});
cartClose.addEventListener("click", () => {
  //   console.log("click");
  cartOverlay.classList.remove("show-cart-overlay");
});
