import { getElement } from "./src/getElement.js";

const hamburger = getElement(".hamburger");
const closeButton = getElement(".close");
const sideNavbar = getElement(".side-navbar");

hamburger.addEventListener("click", () => {
  //   console.log("click");
  sideNavbar.classList.add("show-side-bar");
});
closeButton.addEventListener("click", () => {
  //   console.log("click");
  sideNavbar.classList.remove("show-side-bar");
});
