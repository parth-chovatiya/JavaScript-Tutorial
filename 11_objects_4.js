const person = {
  firstName: "Parth",
  lastName: "Chovatiya",
  city: "Surat",
};

Object.defineProperties(person, {
  college: {
    value: "BVM",
    writable: false,
  },
  age: {
    value: 20,
    writable: true,
  },
});

// Object.getOwnPropertyNames -> it will return an array that contain all the properties of the perticular object
const properties = Object.getOwnPropertyNames(person);
console.log(properties);

const arr = [1, 2, 3];
console.log(Object.getOwnPropertyNames(arr));

// Object.getOwnPropertySymbols()
// retrun an array of all symbol properties found directly upon a given object
// remaining

// Object.getPrototypeOf()
// - static method, that returns the prototype of the specified object
const prototype1 = {};
const object2 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object2) === prototype1);

// Object.is()
// - static method determines whether two values are the same value
const foo = { a: 1 };
const bar = { a: 1 };

console.log(Object.is(foo, bar)); // false, as both of objects are diffetent
console.log(Object.is("Parth", "Parth")); // True

// Object.preverntExtention()
// - prevent future extension of object
// This change is a permanent, If obj is made non-extensible, we can't make extensible again
// Object.preventExtensions(person);

// Object.isExtensible() - detemines if an object is extensible (whether it can have new propeties added to it)
console.log(Object.isExtensible(person));
Object.preventExtensions(person);
console.log(Object.isExtensible(person));

// Object.seal()
// - JS seals an object which prevent new properties from begin added to it & marks all existing properties as non-configurable
// - We can't add new properties & we can't remove existing properties & we can't change old properties
const my_obj = {
  name: "Parth",
};
console.log(my_obj);
console.log(Object.isSealed(my_obj));
const a = Object.seal(my_obj);

// We can't add a new properties as it is non extensible
// Object.defineProperty(my_obj, "city", {
//   value: "Surat",
//   writable: false,
// });
// delete my_obj.name; // we can't remove it, as we have seal object

// Object.isSealed() -> check whether object is sealed or not
console.log(Object.isSealed(my_obj));

// we can change the existing property
a["name"] = "afr"
my_obj["name"] = "gtr"

console.log(a)
console.log(my_obj);
console.log(my_obj.surname);
console.log(Object.getOwnPropertyNames(my_obj));
console.log(my_obj.city);

// Object.setPrototypeOf() - sets the prototype of a specified object to another object or null


// Difference between freeze, seal & preventExtensions
// [create, read, update, delete]
// freeze - No Yes No No
// seal - No Yes Yes No
// preventExtensions - No Yes Yes Yes

