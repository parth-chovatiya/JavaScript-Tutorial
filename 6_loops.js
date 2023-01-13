// for - loops through a block of code a number of times
// for/in - loops through the properties of an object, array are one kind of objects, so that we can use for/in loop as well - it will give index
// for/of - loops through the values of an iterable object, we can't use for/of loop in object - it will give one by one element
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
// for await in loop

// // for loop
// let str = "";
// for (let start = 1; start <= 5; start++) {
//   str = str + start;
// }
// console.log(str);

// // while loop
// let start = 1;
// str = "";
// while (start <= 5) {
//   str = str + start;
//   start++;
// }
// console.log(str);

// // do while loop
// start = 1;
// str = "";
// do {
//   str = str + start;
//   start++;
// } while (start <= 5);
// console.log(str);

// // for in loop
// each iteration return key
// let arr = [1, 2, 3, 4, 5];
// str = "";
// for (const ele in arr) {
// //   ele = 2; // it will not change as ele is const
//   str = str + arr[ele];
// }
// console.log(str);

// const object = { a: 1, b: 2, c: 3 };
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// For of loop
const array1 = ["a", "b", "c"];
console.log("For/of loop");
for (const element of array1) {
  console.log(element);
}

console.log("For/in loop");
for (let x in array1) {
  console.log(x);
}

// We can't do like this for object
const obj = { a: 1, b: 2, c: 3 };
// for(let ele of obj){
//   console.log(ele)
// }

console.log("For/of loop");
for (let key of Object.keys(obj)) {
  console.log(`${key} - ${obj[key]}`);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

// forEach loop
const nums = [4, 3, 6, 3, 7, 5];
nums.forEach((ele, idx, array) => {
  console.log(`${idx} : ${ele}`);
  console.log(array); // it will print whole array
});

// const user = {
//   name: "Parth",
//   surname: "Chovatiya",
//   city: "Surat",
// };
// for (let key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// let i;
// for (i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// Default value will be 2
// var x = +prompt("Enter number", 2)
// console.log(x)

const fruits = ["apple", "mango", "banana", "pear"];
const fruitBasket = {
  apple: 27,
  mango: 0,
  banana: 2,
  pear: 41,
};
const getFruits = (fruit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fruitBasket[fruit]);
    }, 2000);
  });
};

const forOfLoop = async () => {
  console.log("Start");
  for (let fruit of fruits) {
    const frt = await getFruits(fruit);
    console.log(frt);
  }
  console.log("End");
};
// forOfLoop();

// It will give wrong output
// As forEach loop not promise aware (we can't return value in forEach loop)
// It can't support async - await so we can't use async - await in forEach loop
const forEachLoop = () => {
  console.log("Start");
  fruits.forEach(async (fruit) => {
    const frt = await getFruits(fruit);
    console.log(frt);
  });
  console.log("End");
};
// forEachLoop();

// As asynchronous function always return promise, map will return array of promise
// since map always return promise we have to wait to resolve array of promises, ehat we can do by await Promise.all([arr of promis])
const mapLoop = async () => {
  console.log("Start");

  const numFruits_1 = fruits.map(async (fruit) => {
    const frt = await getFruits(fruit);
    // return frt;

    // here we can also manipulate the value we return
    // It will add 100 value to each of the data
    return frt + 100;
  });
  console.log("numFruits_1", numFruits_1);

  const numFruits_2 = await Promise.all(numFruits_1);
  console.log("numFruits_2", numFruits_2);

  console.log("End");
};
// mapLoop();

const filterFruits = async () => {
  console.log("Start");

  // filter does't work, in fact filter return unfiltered array
  const numFruits_1 = fruits.filter(async (fruit) => {
    const frt = await getFruits(fruit);
    return frt > 20;
  });
  console.log("numFruits_1", numFruits_1); // unfiltered array

  // This will also not going to work at all
  const numFruits_2 = await fruits.filter(async (fruit) => {
    const frt = await getFruits(fruit);
    return frt > 20;
  });
  console.log("numFruits_2", numFruits_2); // unfiltered array

  // Why filter return unfiltered array in async-await
  // When we use await in a filter callback, the callback always return a promise.
  // Since promise are always truthy, everything item in the array passes the filter

  // If we want to use anyhow, we have to use map, await & filter
  // First we will fetch data using map & then we are going to be filter it

  const numFruits_3 = fruits.map(async (fruit) => {
    return await getFruits(fruit);
  });
  const numFruits_4 = await Promise.all(numFruits_3);

  const numFruits_5 = fruits.filter((fruit, index) => {
    return numFruits_4[index] > 20;
  });
  console.log("numFruits_5", numFruits_5);

  console.log("End");
};
// filterFruits();

const reduceLoop = async () => {
  console.log("Start");

  // When we use await with reduce, result gets up extremely messy
  const sum_1 = await fruits.reduce(async (sum, fruit) => {
    return sum + (await getFruits(fruit));
  }, 0);
  console.log("sum_1", sum_1); // it will print "[object Promise]41"
  // here is why,
  // in the first iteration, sum = 0 and resolved value is 27 from getFruits(fruit) -> 0 + 27 = 27
  // in the second iteration, sum is promise (bcz, asynchronous func always retuen Promis) & await getFruits(fruit) will return 0 -> [object Promise] + 0 = [object Promise]0
  // In the third iteration. [object Promise] + 2 = [object Promise]2
  // In the fourth iteration, [object Promise] + 41 = [object Promise]41

  // to solve this problem, we have to wait to resolve promise
  // so we have to put wait beefore prev value
  // This will take too much time
  const sum_2 = await fruits.reduce(async (sum, fruit) => {
    return (await sum) + (await getFruits(fruit));
  }, 0);
  console.log("sum_2", sum_2);

  // we can also use map with reduce to solve this problem
  const promise = fruits.map(async (fruit) => await getFruits(fruit));
  const numFruits = await Promise.all(promise);
  const sum_3 = numFruits.reduce((sum, fruit) => sum + fruit);
  console.log("sum_3", sum_3);

  console.log("End");
};
reduceLoop();
