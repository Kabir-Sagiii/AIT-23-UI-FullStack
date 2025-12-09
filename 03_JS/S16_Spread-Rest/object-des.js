var obj1 = {
  name: "riya",
  gender: "female",
  city: "indore",
  state: "MP",
};

var { gender, city, name } = obj1;

function f1() {
  console.log(obj1.city);
  console.log(city);
}

function f2() {
  console.log(obj1.name);
  console.log(name);
}

f1();
f2();
