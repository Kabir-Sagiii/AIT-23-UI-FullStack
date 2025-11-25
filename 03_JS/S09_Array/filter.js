var arr = [10, 20, 30, 40, 50, 60, 70, 80];
//[60,70,80]

var filteredArray = arr.filter(function (element, index) {
  var result = element < 50;
  return result;
});

console.log(filteredArray);
