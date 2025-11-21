function f1() {
  console.log("This is function f1");
}
f1();

var myfun = function () {
  //logic
  console.log("I am Anonymous function");
};

myfun();

function f2(fn) {
  console.log("f2 started its execcution");
  fn();
  console.log("f2 done with execution");
}

f2(function () {
  console.log("I am anonymous as a function argument");
});
