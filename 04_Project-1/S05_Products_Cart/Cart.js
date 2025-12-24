function getCartData() {
  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);
  carts.forEach(function (cart) {
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

    td5.innerHTML = "<button>Delete</button>";
    tr.appendChild(td5);

    document.querySelector("tbody").appendChild(tr);
  });
}
