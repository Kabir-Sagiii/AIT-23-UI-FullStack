function outer() {
  function innerfn() {
    console.log("it is innerfunction");
  }

  innerfn();
}

innerfn(); //Invalid
