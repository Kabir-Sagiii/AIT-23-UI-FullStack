function useAddress() {
  var city = "pune";

  function changeCity(newCity) {
    city = newCity;
    console.log(city);
  }

  return [city, changeCity];
}

// var value = useAddress();
// console.log(value[0]);
// value[1]("mumbai");

var [city, changeCity] = useAddress();
console.log(city);
changeCity("Bhopal");

// function f2(cities) {
//   console.log(cities[2]);
// }

function f2([x, y, z]) {
  console.log(z);
}

f2([10, 20, 30]);
