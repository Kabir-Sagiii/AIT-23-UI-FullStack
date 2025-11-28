var obj = {
  name: "Kabir",
};

function f1(x) {
  x.name = "Sagar";
}

f1(obj);

console.log(obj.name);
