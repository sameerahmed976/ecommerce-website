import { displayProducts } from "./displayProducts.js";
import { getElement } from "./getElement.js";
const from = getElement(".form");
const formSearch = getElement(".form-search");
const products = getElement(".products");
const searchFilter = (data) => {
  from.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  formSearch.addEventListener("keyup", () => {
    // console.log(e.target.value);
    const searchValue = formSearch.value;
    // console.log(
    //   "🚀 ~ file: searchInputFilter.js ~ line 12 ~ formSearch.addEventListener ~ searchValue",
    //   searchValue
    // );

    if (searchValue) {
      let newStoreData = data.filter((ele) => {
        let { name } = ele;
        name = name.toLowerCase();
        if (name.startsWith(searchValue)) {
          return ele;
        }
      });
      displayProducts(newStoreData, getElement(".products"), true);
      if (newStoreData.length < 1) {
        products.innerHTML = `<h1>Sorry No Product Found</h1>`;
      }
    } else {
      displayProducts(data, getElement(".products"));
    }
  });
};

export { searchFilter };
