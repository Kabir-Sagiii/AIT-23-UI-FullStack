function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve({ ok: true, results: [{ name: "s1" }, { name: "s2" }] });
  });

  return promise;
}

const value = createPromise();
// console.log(value);

value
  .then(function (success) {
    console.log(success);
  })
  .catch(function (error) {
    console.log(error);
  });
