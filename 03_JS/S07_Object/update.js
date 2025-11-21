var product = {
  brandName: "Apple",
  model: "Iphone 16",
  price: 80000,
  rating: 4.5,
};

console.log(product);
console.log("---------------------------------------------------------------");

product.model = "Iphone 17 pro max";
product["price"] = 180000;

console.log(product);
