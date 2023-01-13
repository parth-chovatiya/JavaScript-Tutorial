// As everythinh in JavaScript is nothing but object
// prototype chain ends up with null

function myFunction() {
  console.log(this);
}
// myFunction()

// arr.__proto__ is same as Array.prototype
// arr.__proto__.__proto__ is same as Object.prototype
// arr.__proto__.__proto__.__proto__ is null

// prototype of Array.prototype is Object.prototype
// prototype of Object.prototype is null
// prototype chain
// As array is one kind of object
const arr = ["a", "b", "c"];
console.log(typeof arr);

// obj.__proto__ is same as Object.prototype
// obj.__proto__ === Object.prototype//true
// obj.__proto__.__proto__ is null as prototype of Object.prototype is null
let obj = {
  name: "Parth",
  city: "Surat",
  getIntro: function () {
    return `My name is ${this.name}. I am from ${this.city}`;
  },
  getCity: () => {
    return this.city;
  },
};

console.log(typeof obj);
console.log(obj);
console.log("obj.getCity - ", obj.getCity());

// func.__proto__ is same as Functin.prototype
// func.__proto__.__proto__ is same as Object.prototype
function fun() {}

console.log(typeof fun);

let obj2 = {
  name: "Aditya",
};

// Nevet do this, it will cause huge purformance issue
// We are changing the prototype of obj2 to the obj
obj2.__proto__ = obj;

Function.prototype.myBind = function () {
  console.log("Inside Fuction prototype myBind");
};
function func1() {}

console.log(Object instanceof Function);
console.log(Function instanceof Object);

globalThis.name = "Parth";

const obj2 = {
  name: "savan",
  printName1: () => {
    // here, this will point to the above of the object lexical scop
    console.log(this.name); // parth - in browser
  },
  printName2: function () {
    let name = "asdfasdf";
    // here, this will point to the object
    console.log(this.name); // savan
  },
};

obj2.printName1();
obj2.printName2();

Object.__proto__ === Function.prototype//true