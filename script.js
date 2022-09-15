import "./src/cartToggle.js";
import { displayProducts } from "./src/displayProducts.js";
import { getFetch } from "./src/getFetch.js";
import "./src/sidebar.js";

const url = "https://course-api.com/javascript-store-products";

const init = async () => {
  const data = await getFetch(url);
  //   console.log(data);
  displayProducts(data);
};

window.addEventListener("DOMContentLoaded", init);
