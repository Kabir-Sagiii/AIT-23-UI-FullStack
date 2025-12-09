function fnRest(a, b, ...x) {
  x.forEach((ele) => {
    console.log(ele);
  });
}

fnRest(10, 20, 30, 40, 50, 60, 70);
