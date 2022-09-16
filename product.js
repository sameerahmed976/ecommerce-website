import { buttonGroup } from "./src/buttonGroup.js";
import "./src/cartToggle.js";
import { displayProducts } from "./src/displayProducts.js";
import { getElement } from "./src/getElement.js";
import { priceRange } from "./src/range.js";
import { searchFilter } from "./src/searchInputFilter.js";
import "./src/sidebar.js";
import { store } from "./src/storeData.js";

const products = getElement(".products");

displayProducts(store, products);
buttonGroup(store);
searchFilter(store);
priceRange(store);
