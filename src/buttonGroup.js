import { displayProducts } from "./displayProducts.js";
import { getElement } from "./getElement.js";
import { store } from "./storeData.js";

const buttonGroup = () => {
  const companies = ["all", ...new Set(store.map((ele) => ele.company))];

  const buttons = getElement(".btn-group");

  buttons.innerHTML = companies
    .map((company) => {
      return `<button class="btn-company"> ${company} </button>`;
    })
    .join(" ");

  buttons.addEventListener("click", (e) => {
    const element = e.target;
    // console.log("click");

    if (element.classList.contains("btn-company")) {
      let storeNew = [];
      //   console.log("click");

      if (element.textContent === "all") {
        console.log("all");
      }

      //   displayProducts(storeNew, getElement(".products"));
    }
  });
};

export { buttonGroup };
