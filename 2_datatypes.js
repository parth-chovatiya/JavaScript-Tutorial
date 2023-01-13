// JavaScript has 8 Datatypes
// 1. Number
// 2. String
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol -> not able to understand
// 8. Object

// Number
let num = 4;
let price = 3.4;

console.log(typeof num);
console.log(typeof price);

// String
let surname = "Chovatiya";

console.log(typeof surname);

// Booleans
let t = true;
let f = false;

console.log(typeof t);
console.log(typeof f);

let x; // typeof x -> undefined
console.log(typeof x);
x = 4; // typeof x -> number
x = "abc"; // typeof x -> string

// let b = BigInt("123456789012345678901234567890");    // it will be BigInt
let b = 123456789012345678901234567890; // it will be number
// let b = 123456789012345678901234567890n  // it will be BigInt
console.log(b);
console.log(typeof b);


let age = null  // typeof null -> object, it is bug
console.log(typeof age);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 4);
console.log(typeof 4.3);
console.log(typeof 4n);
console.log(typeof "parth");
console.log(typeof {});
console.log(typeof {name: "parth"});
console.log(typeof true);
console.log(typeof Symbol("abc"));

console.log(Symbol("abc"));

// guaranteed to return a unique Symbol
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(sym2 == sym3)

console.log(sym1)
console.log(sym2)
console.log(sym3)