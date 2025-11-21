function display(f1) {
  console.log("display is called");
  f1();
}

display(function () {
  console.log("i am callback");
});

display(function getProducts() {
  console.log("getProducts is called");
});

function changePrice() {
  console.log("price updated");
}

display(changePrice);
