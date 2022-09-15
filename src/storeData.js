import { getItemStorage, setItemStorage } from "./utils.js";

let store = getItemStorage("store");

const setStore = (data) => {
  store = data.map((ele) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = ele;

    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });

  setItemStorage("store", store);
};

export { setStore, store };
