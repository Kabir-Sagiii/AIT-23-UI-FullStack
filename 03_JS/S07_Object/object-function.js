var user = {
  name: "S1",
  gender: "male",
  changeName: function (x, y) {
    console.log("Name Changed");
    return 100;
  },
};

var value = user.changeName(10, 20);
