const displayArray = (a = 0, b = 0, ...arr) => {
  //   console.log(a);
  //   console.log(b);

  for (let element of arr) {
    console.log("1" + element);
  }
};

displayArray(1);
displayArray();
