async function getProducts() {
  try {
    let binaryData = await fetch("https://fakestoreapi.com/products");
    let data = await binaryData.json();

    data.forEach(function (product) {
      const div = document.createElement("div");
      div.style.width = "300px";
      div.style.padding = "10px";
      div.style.boxShadow = "0 0 10px green";
      div.style.textAlign = "center";

      const img = document.createElement("img");
      img.src = product.image;
      img.style.width = "100%";
      img.style.height = "200px";
      div.appendChild(img);

      const h3 = document.createElement("h3");
      h3.textContent = product.title;
      h3.style.color = "green";

      div.appendChild(h3);

      const price = document.createElement("p");
      price.textContent = "$" + product.price;
      div.appendChild(price);

      const desc = document.createElement("p");
      desc.textContent = product.description;
      div.appendChild(desc);

      document.querySelector("section").appendChild(div);
    });
  } catch (error) {
    alert("Something went wrong");
  }
}

function fnChangeColor() {
  document.querySelector("h1").style.color = "green";
}

function removeColor() {
  document.querySelector("h1").style.color = "black";
}
