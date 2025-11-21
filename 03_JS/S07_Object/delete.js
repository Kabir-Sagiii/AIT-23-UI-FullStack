var product = {
  brandName: "Apple",
  model: "Iphone 16",
  price: 80000,
  rating: 4.5,
};

console.log(product);

delete product.price;

delete product["rating"];

console.log(product);
