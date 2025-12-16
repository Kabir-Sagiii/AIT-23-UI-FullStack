var promiseObject = new Promise(function (resolve, reject) {
  resolve({ ok: true, result: [] });
  //   reject({ ok: false, error: "Something went wrong" });
});

// console.log(promiseObject);

promiseObject
  .then(function (successdata) {
    console.log("then block");
    console.log(successdata);
  })
  .catch(function (errordata) {
    console.log("catch block");
    console.log(errordata);
  });
