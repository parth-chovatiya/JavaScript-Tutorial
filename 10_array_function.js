const animals = ["Dog", "Cat", "Tiger", "Lion"];
const cars = new Array("Saab", "Volvo", "BMW");

// Array are special type of objects
// Arrays use numbers to access its "elements".
console.log(typeof animals); // objects
console.log(typeof cars); // objects

// Solution 1
// typeof array -> it will give array
// Ṭo resolve, ECMAScript defined a new method Array.isArray():
console.log(Array.isArray(animals));
console.log(Array.isArray(cars));

// Solution 2
console.log(animals instanceof Array);
console.log(cars instanceof Array);

console.log(animals.length); // length is preperty
animals.sort(); // sort is function
console.log(animals);

animals.forEach((x) => console.log(x));

// x -> key
for (let x in animals) {
  console.log(animals[x]);
}

// x -> value
// for/of loop can't use on object
for (let x of animals) {
  console.log(x);
}

const obj = {
  surname: "Chovatiya",
  name: "Parth",
};

for (let x in obj) {
  console.log(`${x} - ${obj[x]}`);
}

// It will not work for object
// for(let x of obj){
//     console.log(x)
// }

cars.push("TATA");
console.log(cars);

let cars_str_1 = cars.toString(); // it will convert array to string with ',' separator
console.log(cars_str_1);
console.log(typeof cars_str_1);

let cars_str_2 = cars.join("*");
console.log(cars_str_2);

cars.pop(); // pop last element
console.log(cars);

// shift() -> methods removes first elelemt
cars.shift();
console.log(cars);

// unshift() -> methods add to the first
cars.unshift("Test");
console.log(cars);

const a = ["a", "b", "c"];
const b = ["d", "e", "f"];

const c = a.concat(b);
console.log(c);

// splice
// splice -> spice(index, no of element to remove, elements to add)
// splice also removes the elements
cars.splice(2, 10, "a", "b", "c");
cars.splice(2, 0, ["a", "b", "c"]);
cars.splice(2, 1); // one element will remove from cars

console.log(cars);

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
// - The slice() method creates a new array.
// - The slice() method does not remove any elements from the source array.

const newArr = cars.slice(2, 4);
console.log(newArr);

cars.sort();
cars.reverse();

console.log(cars);

// map() -> create new array by performing a function to each array element
// - does not change the original array
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArr_1 = myArr.map((ele, index) => ele * 2);
console.log(newArr_1);

// filter() -> create new array with array element that pass the test
const newArr_2 = myArr.filter((ele, index) => ele % 2);
console.log(newArr_2);

// reduce() -> runs a function on each array element to produce (reduce) a single value
// - it will reduce array into one element
// - does not reduce original array
const sum_1 = myArr.reduce((sum, ele, index, array) => {
  //   console.log(`${index} - ${myArr[index]}`);
  return sum + ele;
}, 0); // here, 0 is initial value
console.log(sum_1);

console.log(myArr);

// reduceRight() -> runs a function on each array ele to produce(reduce) a single value
// - does not reduce original array
// - reduceRight() -> work from right to left
const sum_2 = myArr.reduceRight((sum, ele, index, array) => {
  //   console.log(`${index} - ${myArr[index]}`);
  return sum + ele;
}, 0); // here, 0 is initial value
console.log(sum_2);

// every() -> methods checks if all array values pass a test or not? if pass -> true, else -> false
const less_10 = myArr.every((ele, index, array) => ele < 10);
console.log(less_10);

// some() -> methos check if any one ele pass test -> true, else -> false
const isOdd = myArr.some((ele, index, array) => ele % 2);
console.log(isOdd);

console.log(cars);

// indexOf() -> search array ele value & return index of that
// - if not found, it will return -1
const idx_1 = cars.indexOf("Volvo");
console.log(idx_1);

// lastIndexOf() -> it will return last index of element

// find() -> return value of the first array element that passes a test function
// - if not found, it will return undefined
const first_1 = cars.find((value, index, array) => {
  return value === "Test";
});
console.log(first_1);

// findIndex() -> return index of the first array element that passes a test function
const first_2 = cars.findIndex((value, index, array) => {
  return value === "Test";
});
console.log(first_2);

const inc = cars.includes("Test");
console.log(inc);
