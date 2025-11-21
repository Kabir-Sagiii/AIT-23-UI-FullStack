var user = {
  name: "raj",
  gender: "male",
  address: {
    city: "Mumbai",
    state: "MH",
  },
};

console.log(user.address.city);

console.log(user["address"]["state"]);
