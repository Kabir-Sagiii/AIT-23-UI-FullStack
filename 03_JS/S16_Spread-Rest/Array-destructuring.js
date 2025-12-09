var data = [10, 20, 30, 40, 50, 60, 70, 80, 33, 44, 66, 99];

var [x1, x2, x3, x4, x5, x6, x7] = data;

function f1() {
  //70
  console.log(data[6]);
  console.log(x7);
}

function f2() {
  //40
  console.log(data[3]);
  console.log(x4);
}

f1();
f2();
