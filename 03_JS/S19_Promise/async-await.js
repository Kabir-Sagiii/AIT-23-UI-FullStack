function createPromise() {
  var promise = new Promise(function (resolve, reject) {
    resolve({ ok: true, results: [{ name: "s1" }, { name: "s2" }] });
  });

  return promise;
}

async function handlePromise() {
  try {
    var data = await createPromise();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
