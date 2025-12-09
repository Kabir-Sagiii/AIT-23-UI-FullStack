var obj1 = {
  username: "ajay",
  gender: "male",
  isMarried: false,
  city: "Delhi",
};
var obj3 = {
  email: "rohan@gmail.com",
  phone: 999999999,
};

var obj2 = {
  ...obj1,
  username: "Rohan",
  ...obj3,
  pincode: 999999,
};

// console.log(obj1);

// console.log("              ");

// console.log(obj2);

var arr1 = [10, 20, 30, 40];

var arr2 = ["h1", "hello", ...arr1, 80, 90];

console.log(arr1);

console.log("              ");

console.log(arr2);
