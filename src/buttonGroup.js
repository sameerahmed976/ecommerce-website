import { displayProducts } from "./displayProducts.js";
import { getElement } from "./getElement.js";

const buttonGroup = (store) => {
  const companies = ["all", ...new Set(store.map((ele) => ele.company))];

  const buttons = getElement(".btn-group");

  buttons.innerHTML = companies
    .map((company) => {
      return `<button class="btn-company">${company}</button>`;
    })
    .join(" ");

  buttons.addEventListener("click", (e) => {
    // console.log(e.target);
    const element = e.target;
    if (element.classList.contains("btn-company")) {
      // console.log("all");
      // console.log(element.textContent === "all");
      let newStoreData = [];
      if (element.textContent === "all") {
        newStoreData = [...store];
      } else {
        newStoreData = store.filter((el) => el.company === element.textContent);
      }

      displayProducts(newStoreData, getElement(".products"), true);
    }
  });
};

export { buttonGroup };
