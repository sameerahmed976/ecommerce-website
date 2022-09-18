import "./src/addToCart.js";
import "./src/cartToggle.js";
import { getElement } from "./src/getElement.js";
import "./src/sidebar.js";
import { formatPrice } from "./src/utils.js";
const loading = getElement(".loading");
const productMain = getElement(".product-main");
const productTitle = getElement(".product-title");

window.addEventListener("DOMContentLoaded", async () => {
  const id = window.location.search;
  //   console.log(id);

  const response = await fetch(
    `https://course-api.com/javascript-store-single-product${id}`
  );

  if (response.status >= 200 && response.status <= 299) {
    const products = await response.json();

    console.log(products);
    const {
      id,
      fields: { colors, company, description, name, price },
    } = products;
    const image = products.fields.image[0].thumbnails.large.url;

    document.title = `${name}`;
    productTitle.textContent = `${name}`;
    productMain.innerHTML = `<section class="product-info">
              <img src="${image}" alt="image" class="single-image" />
              <h1 class="single-name">${name}</h1>
              <h2 class="single-title">by ${company}</h2>
              <p class="single-price">${formatPrice(price)}</p>
             <article class="colors">
${colors
  .map((c) => {
    return `<div class="color" style="background-color: ${c}"></div>`;
  })
  .join(" ")}


          </article>
              <p class="single-description">
                 ${description}
        </p>
        <button class="btn btn-single-cart"  data-id=${id} >Add to cart</button>
      </section>`;
  } else {
    const singleProduct = getElement(".single-product");
    singleProduct.innerHTML = `<h1>There is no products</h1> <br/>
    <a href="Product.html" >back to products</a>
      `;
  }

  loading.style.display = "none";
});
