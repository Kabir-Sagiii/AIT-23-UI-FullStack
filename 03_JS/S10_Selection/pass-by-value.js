var a = 10;

function f1(x) {
  x = 20;
  console.log(x);
}

f1(a);

console.log(a); //10
