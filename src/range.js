import { displayProducts } from "./displayProducts.js";
import { getElement } from "./getElement.js";

const priceRange = (data) => {
  const inputValue = getElement(".range");
  const rangeValue = getElement(".range-value");
  const products = getElement(".products");
  const priceValue = data.map((ele) => ele.price * 10);
  //   console.log(
  //     "🚀 ~ file: range.js ~ line 10 ~ priceRange ~ priceValue",
  //     priceValue
  //   );
  let maxPrice = Math.max(...priceValue);
  //   console.log("🚀 ~ file: range.js ~ line 9 ~ priceRange ~ maxPrice", maxPrice);
  //   maxPrice = Math.ceil(maxPrice);
  inputValue.max = maxPrice;
  inputValue.min = 0;
  rangeValue.textContent = `Value ₹ ${maxPrice}`;
  inputValue.value = maxPrice;

  inputValue.addEventListener("input", () => {
    const value = parseInt(inputValue.value);
    rangeValue.textContent = `Value ₹ ${value}`;
    let newStoreData = data.filter((ele) => ele.price * 10 <= value);
    displayProducts(newStoreData, getElement(".products"));
    if (newStoreData.length < 1) {
      products.innerHTML = `<h1>Sorry No Product Found</h1>`;
    }
  });
};

export { priceRange };
