import { addToCartDOM } from "./addToCartDOM.js";
import { openCart } from "./cartToggle.js";
import { getElement } from "./getElement.js";
import { store } from "./storeData.js";
import { formatPrice, getItemStorage, setItemStorage } from "./utils.js";

const cartValue = getElement(".cart-number-value");
const cartItems = getElement(".cart-items");
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
    // console.log(
    //   "🚀 ~ file: addToCart.js ~ line 28 ~ addToCart ~ amount",
    //   amount
    // );
    const items = [...cartItems.querySelectorAll(".cart-numbers")];
    // console.log("🚀 ~ file: addToCart.js ~ line 29 ~ addToCart ~ items", items);

    const item = items.find((ele) => {
      return ele.dataset.id === id;
    });
    // console.log("🚀 ~ file: addToCart.js ~ line 38 ~ item ~ item", item);

    item.textContent = amount;
  }
  displayCartItemCount();
  displayCartTotal();
  setItemStorage("cart", cart);

  //   console.log(id);
  openCart();
};

const increaseAmount = (id) => {
  // console.log(cart);
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      // console.log("click");
      newAmount = item.amount + 1;

      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;

  // let newAmount;
  // cart = cart.map((item) => {
  //   if (item.id === id) {
  //     newAmount = item.amount + 1;
  //     item = { ...item, amount: newAmount };
  //   }
  //   return cart;
  // });
  // return newAmount;
};
const decreaseAmount = (id) => {
  console.log(cart);
  let newAmount;
  cart = cart.map((item) => {
    if (item.id === id) {
      // console.log("click");
      newAmount = item.amount - 1;

      item = { ...item, amount: newAmount };
    }
    return item;
  });
  return newAmount;

  // let newAmount;
  // cart = cart.map((item) => {
  //   if (item.id === id) {
  //     newAmount = item.amount + 1;
  //     item = { ...item, amount: newAmount };
  //   }
  //   return cart;
  // });
  // return newAmount;
};

const displayCartItemCount = () => {
  // console.log(cart);

  const amountValue = cart.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);
  // console.log(
  //   "🚀 ~ file: addToCart.js ~ line 68 ~ amountValue ~ amountValue",
  //   amountValue
  // );
  cartValue.textContent = amountValue;

  // console.log(cartValue);
  // const amountValue = cart.reduce((total, item) => {
  //   console.log(item);
  //   return (total += item.amount);
  // }, 0);
  // console.log(
  //   "🚀 ~ file: addToCart.js ~ line 67 ~ amount ~ amount",
  //   amountValue
  // );
  // console.log(
  //   "🚀 ~ file: addToCart.js ~ line 40 ~ displayCartItemCount ~ amount",
  //   amount
  // );
};

const removeItem = (id) => {
  cart = cart.filter((item) => item.id !== id);
};

const setupCartFunction = () => {
  cartItems.addEventListener("click", (e) => {
    const element = e.target;

    // console.log(element.classList);
    if (element.classList.contains("btn-cart-remove")) {
      // console.log(element.parentElement.parentElement);
      // console.log(element.parentElement.parentElement.dataset.id);

      removeItem(element.parentElement.parentElement.dataset.id);
      element.parentElement.parentElement.remove();
    }

    if (e.target.parentElement.classList.contains("cart-up")) {
      const id = element.parentElement.dataset.id;
      let amount = increaseAmount(id);

      console.log(e.target.parentElement.nextElementSibling);

      const numberContent = e.target.parentElement.nextElementSibling;
      numberContent.textContent = amount;

      // console.log(element.parentElement.dataset.id);

      // removeItem(element.parentElement.parentElement.dataset.id);
      // element.parentElement.parentElement.remove();
    }
    if (e.target.parentElement.classList.contains("cart-down")) {
      const id = element.parentElement.dataset.id;
      const amount = decreaseAmount(id);

      if (amount === 0) {
        removeItem(id);
        // console.log(e.target.parentElement.parentElement.parentElement);
        const parent = e.target.parentElement.parentElement.parentElement;
        parent.remove();
      }

      // console.log(
      //   "🚀 ~ file: addToCart.js ~ line 160 ~ cartItems.addEventListener ~ amount",
      //   amount
      // );

      // console.log(e.target.parentElement.previousElementSibling);

      const numberContent = e.target.parentElement.previousElementSibling;
      // console.log(
      //   "🚀 ~ file: addToCart.js ~ line 168 ~ cartItems.addEventListener ~ numberContent",
      //   numberContent
      // );
      numberContent.textContent = amount;

      // console.log(element.parentElement.dataset.id);

      // removeItem(element.parentElement.parentElement.dataset.id);
      // element.parentElement.parentElement.remove();
    }

    setItemStorage("cart", cart);
    displayCartItemCount();
    displayCartTotal();
  });
};

const displayCartTotal = () => {
  const total = cart.reduce((t, item) => {
    return (t += item.price * item.amount);
  }, 0);
  // console.log("🚀 ~ file: addToCart.js ~ line 84 ~ total ~ total", total);
  // console.log("🚀 ~ file: addToCart.js ~ line 50 ~ total ~ total", total);
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

  setupCartFunction();
};

start();

export { addToCart };
