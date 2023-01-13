const input = {
  a: 1,
  b: "2",
  c: 3,
};

const removeKey = ["b"];

removeKey.forEach((key) => {
  if (input[key]) {
    delete input[key];
  }
});

console.log(input);
