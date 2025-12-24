function getCartData() {
  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);
  carts.forEach(function (cart, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var img = document.createElement("img");

    img.width = "50";
    img.height = "50";
    img.src = cart.image;

    td1.appendChild(img);
    tr.appendChild(td1);

    td2.textContent = cart.name;
    tr.appendChild(td2);

    td3.textContent = cart.price;
    tr.appendChild(td3);

    td4.textContent = 1;
    tr.appendChild(td4);

    td5.innerHTML =
      "<i class='bi bi-x-lg' style='color:red;font-size:27px'></i>";
    td5.onclick = function () {
      removeItem(cart.name, index, carts);
    };
    tr.appendChild(td5);

    document.querySelector("tbody").appendChild(tr);
  });
}

function removeItem(name, index) {
  var tbody = document.querySelector("tbody");
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);

  var newcart = carts.filter((cart) => cart.name !== name);

  localStorage.setItem("carts", JSON.stringify(newcart));

  getCartData();
}
