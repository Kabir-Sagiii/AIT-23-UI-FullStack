function fnOuter() {
  var x = 100;

  return function fnInner() {
    console.log(x);
    var y = 50;
  };
  fnInner();
  console.log(y);
}

// fnOuter();
var inner = fnOuter();

inner();
