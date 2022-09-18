import "./src/addToCart.js";
import "./src/cartToggle.js";
import { displayProducts } from "./src/displayProducts.js";
import { getElement } from "./src/getElement.js";
import { getFetch } from "./src/getFetch.js";
import "./src/sidebar.js";
import { setStore, store } from "./src/storeData.js";
const url = "https://course-api.com/javascript-store-products";

const init = async () => {
  const data = await getFetch(url);
  // console.log(data);
  setStore(data);

  const featuredProduct = store.filter((ele) => ele.featured === true);

  displayProducts(featuredProduct, getElement(".featured-container"));
};

window.addEventListener("DOMContentLoaded", init);
