// function f1(props) {
//   console.log(props.city);
// }

function f1({ city, username, gender, isPlaced }) {
  console.log(city);
}

f1({ username: "vaish", gender: "female", city: "hyd", isPlaced: true });
