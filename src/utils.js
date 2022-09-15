const setItemStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const formatPrice = (price) => {
  const priceFormat = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((price * 10).toFixed(2));

  return priceFormat;
};

const getItemStorage = (key) => {
  let keyItem = localStorage.getItem(key);

  if (keyItem) {
    keyItem = JSON.parse(localStorage.getItem(key));
  } else {
    keyItem = [];
  }

  return keyItem;
};

export { setItemStorage, getItemStorage, formatPrice };
