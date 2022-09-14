const getElement = (selector) => {
  if (selector) {
    return document.querySelector(selector);
  }

  throw new Error(`There is no selector ${selector}`);
};

export { getElement };
