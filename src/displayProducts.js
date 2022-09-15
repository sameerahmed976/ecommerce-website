import { addToCart } from "./addToCart.js";
import { getElement } from "./getElement.js";
import { formatPrice } from "./utils.js";
const loading = getElement(".loading");

export const displayProducts = (products, element) => {
  element.innerHTML = products
    .map(({ name, image, id, price }) => {
      return ` <article class="product"  data-id="${id}" >
            <article class="product-container">
              <img src="${image}" alt="product" class="product-image" />
              <article class="product-icons">
                <a href="products.html?id=${id}" class="btn btn-search"
                  ><i class="fa-solid fa-search"></i
                ></a>
                <button class="btn btn-shopping" data-id="${id}"  >
                  <i class="fa-solid fa-shopping-cart"></i>
                </button>
              </article>
            </article>
            <h3 class="product-name">${name}</h3>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </article> `;
    })
    .join(" ");
  loading.style.display = "none";

  element.addEventListener("click", (e) => {
    // console.log(e.target.parentElement);

    const element = e.target.parentElement;

    if (element.classList.contains("btn-shopping")) {
      const id = element.dataset.id;
      addToCart(id);
    }
  });
};
