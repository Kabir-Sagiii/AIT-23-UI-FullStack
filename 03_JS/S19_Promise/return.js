async function f1() {
  console.log("f1 is called");
  return 100;
}

const value = f1();
console.log(value);

//   f1 is called
//   Promise {100}
