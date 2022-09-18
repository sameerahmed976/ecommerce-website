import { addToCartDOM } from "./addToCartDOM.js";
import { openCart } from "./cartToggle.js";
import { getElement } from "./getElement.js";
import { store } from "./storeData.js";
import { formatPrice, getItemStorage, setItemStorage } from "./utils.js";

const cartValue = getElement(".cart-number-value");
// const cartItems = getElement(".cart-items");
const cartTotal = getElement(".cart-total");

let cart = getItemStorage("cart");

const findProduct = (id) => {
  return store.find((ele) => ele.id === id);
};

const addToCart = (id) => {
  let item = cart.find((cartId) => cartId.id === id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    //

    const amount = increaseAmount(id);
  }
  displayCartItemCount();
  displayCartTotal();
  setItemStorage("cart", cart);

  //   console.log(id);
  openCart();
};

const increaseAmount = (id) => {
  cart = cart.map((item) => {
    if (item.id === id) {
      item = { ...item, amount: item.amount + 1 };
    }
    return cart;
  });
};

const displayCartItemCount = () => {
  console.log(cartValue);

  const amount = cart.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  cartValue.textContent = amount;
  console.log(
    "🚀 ~ file: addToCart.js ~ line 40 ~ displayCartItemCount ~ amount",
    amount
  );
};

// const setupCartFunction = () => {};

const displayCartTotal = () => {
  const total = cart.reduce((total, item) => {
    return (total += item.price * item.amount);
  }, 0);
  console.log("🚀 ~ file: addToCart.js ~ line 50 ~ total ~ total", total);
  cartTotal.textContent = `Total : ${formatPrice(total)} `;
};

const displayCartItemDom = () => {
  cart.forEach((ele) => {
    addToCartDOM(ele);
  });
};

const start = () => {
  // count
  displayCartItemCount();
  // total
  displayCartTotal();
  // all dom

  displayCartItemDom();

  // setupCartFunction();
};

start();

export { addToCart };
