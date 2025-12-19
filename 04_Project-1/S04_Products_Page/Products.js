function createMultipleCards() {
  //access the data
  let products = localStorage.getItem("products");
  products = JSON.parse(products);

  products.forEach(function (product) {
    createCard(product);
  });
}

function createCard(product) {
  //creates only one card
  const div = document.createElement("div");
  div.style.width = "350px";
  div.style.boxShadow = "0 0 10px green";
  div.style.margin = "10px";
  div.style.textAlign = "center";
  div.style.padding = "20px";

  const img = document.createElement("img");
  img.style.width = "100%";
  img.height = "200";
  img.src = product.image;

  const h2 = document.createElement("h2");
  h2.textContent = product.name;
  h2.style.color = "green";
  h2.style.margin = "20px 0px 10px";

  const price = document.createElement("p");
  price.textContent = `$ ${product.price}`;
  price.style.marginTop = "10px";

  const desc = document.createElement("p");
  desc.textContent = product.description;
  desc.style.margin = "20px 0px";
  desc.style.fontStyle = "italic";

  const addToCart = document.createElement("button");
  addToCart.textContent = "Add To Cart";
  addToCart.classList.add("add-to-cart");
  addToCart.onclick = function () {
    addToCart.style.display = "none";
    removeFromCart.style.display = "inline";
    h2.style.color = "Red";
    div.style.boxShadow = "0 0 10px red";
    addInCart(product);
  };

  const removeFromCart = document.createElement("button");
  removeFromCart.textContent = "Remove From Cart";
  removeFromCart.classList.add("remove-from-cart");
  removeFromCart.style.display = "none";
  removeFromCart.onclick = function () {
    addToCart.style.display = "inline";
    removeFromCart.style.display = "none";
    h2.style.color = "green";
    div.style.boxShadow = "0 0 10px green";
  };

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(price);
  div.appendChild(desc);
  div.appendChild(addToCart);
  div.appendChild(removeFromCart);

  document.querySelector("#products").appendChild(div);
}

function addInCart(product) {
  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);
  carts.push(product);
  localStorage.setItem("carts", JSON.stringify(carts));
}
