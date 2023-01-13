const sum = (a, b = 0) => a + b;

console.log(sum(2, 3));
console.log(sum(3));

const laptop = (model, { ram, processor } = {}) => {
  console.log(`${model}, ${ram}, ${processor}`);
};
laptop("HP",{a: 1});

const printArr = (arr = [0, 0, 0]) => {
  for (let element of arr) {
    console.log(element);
  }
};
printArr([1, 2, 3, 4]);
printArr();

const myFunction = (a, b = 0, c) => {
  console.log(`${a}, ${b}, ${c}`);
};
myFunction(2, 9);
