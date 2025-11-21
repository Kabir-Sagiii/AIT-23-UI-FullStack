function display(f1) {
  console.log("display is called");
  f1();
}

display(function () {
  console.log("i am callback");
});

//here display function is called HOF
