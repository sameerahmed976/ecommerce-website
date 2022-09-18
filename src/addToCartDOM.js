import { getElement } from "./getElement.js";
import { formatPrice } from "./utils.js";
const articleDOM = getElement(".cart-items");

const addToCartDOM = ({ id, name, price, image, amount }) => {
  //   console.log(product);

  articleDOM.innerHTML += ` <article class="cart-item"  data-id= ${id}   >
                <img src=${image} alt="cart-image" class="cart-image" />
                <article class="cart-content">
                  <h1 class="content-heading">${name}</h1>
                  <p class="cart-price">${formatPrice(price)}</p>
                  <button class="btn btn-cart-remove">remove</button>
                </article>
                <article class="cart-group">
                  <button class="cart-up" data-set=${id}     >
                    <i class="fa-solid fa-angle-up"></i>
                  </button>
                  <div class="cart-numbers">${amount}</div>
                  <button class="cart-down"  data-set=${id} >
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                </article>
              </article>`;
};

export { addToCartDOM };
