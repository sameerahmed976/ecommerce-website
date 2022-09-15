import { getElement } from "./getElement.js";

const cartContainer = getElement(".cart");
const cartOverlay = getElement(".cart-overlay ");
const cartClose = getElement(".cart-close ");

cartContainer.addEventListener("click", () => {
  //   console.log("click");
  cartOverlay.classList.add("show-cart-overlay");
});
cartClose.addEventListener("click", () => {
  //   console.log("click");
  cartOverlay.classList.remove("show-cart-overlay");
});

export const openCart = () => {
  cartOverlay.classList.add("show-cart-overlay");
};
