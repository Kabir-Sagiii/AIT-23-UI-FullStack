var data = [10, 20, 30, 40];

var newArray = data.map(function (element, index) {
  var result = element * 100;
  return result;
});

console.log(data);
console.log("                             ");
console.log(newArray);
