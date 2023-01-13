const target = {
  a: 1,
  b: 2,
};
const source_1 = {
  b: 3,
  c: 4,
};
const source_2 = {
  c: 5,
  d: 6,
};

// Object.assign()
// copies all properties from multiple source to target
// merging object to target object
const returendTarget = Object.assign(target, source_1, source_2);
console.log(target);
console.log(returendTarget);
console.log(target === returendTarget);

// copy object
// both will not point to the same memory location
const newObj = Object.assign({}, target);

// Object.create() - create a new object from existing object
const person = {
  firstName: "Parth",
  lastName: "Chovatiya",
};

const person_1 = Object.create(person);

console.log(person);
console.log(person_1);

// Object.enrties() - return array of a given object's
const newArr = Object.entries(person);
console.log(typeof newArr);
console.log(newArr);

// We can't iterate objects in the for/of loop
// As Object.entries() create a new
for (const [key, value] of Object.entries(person)) {
  console.log(`${key} - ${value}`);
}
for (const x of Object.entries(person)) {
  console.log(x);
}

const obj_2 = {
  name: "Parth",
};

// Object.freeze()  ->  it makes existing properties non-writable & non-configurable
obj_2.name = "Ronak";
console.log(obj_2);
Object.freeze(obj_2);
obj_2.name = "Parth";
console.log(obj_2);


console.log(Object.isFrozen(obj_2));

// Object.fromEntries() -> transfer key-value pair into an object
const myMP = new Map([
  ["a", "aa"],
  ["b", "bb"],
]);

console.log(myMP);
console.log(typeof myMP); // object
const obj_3 = Object.fromEntries(myMP);
console.log(obj_3);
console.log(typeof obj_3); // object

// Object.getOwnPropertyDescriptor() - allows to query the full information about property & return a property descriptor
// - whether it is writable or not ?
const object1 = {
  name: "Parth",
};

Object.defineProperty(object1, "city", {
  value: "Surat",
  writable: false,
});

Object.defineProperty(object1, "college", {
  get: function () {
    this.college = "BVM";
  },
});

const descriptor_1 = Object.getOwnPropertyDescriptor(object1, "name");
const descriptor_2 = Object.getOwnPropertyDescriptor(object1, "city");
const descriptor_3 = Object.getOwnPropertyDescriptor(object1, "college");

// An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object. keys() method.

console.log(descriptor_1.value);
console.log(descriptor_1.enumerable);
console.log(descriptor_1.writable);
console.log(descriptor_1.get);

console.log(descriptor_2.value);
console.log(descriptor_2.enumerable);
console.log(descriptor_2.writable);
console.log(descriptor_2.get);

console.log(descriptor_3.value);
console.log(descriptor_3.enumerable);
console.log(descriptor_3.writable);
console.log(descriptor_3.get);
console.log(descriptor_3.set);

// Object.getOwnPropertyDescriptors()
// return all own descriptors of a given object
const descriptor_4 = Object.getOwnPropertyDescriptors(object1);
console.log(descriptor_4.name.value);
console.log(descriptor_4.city.value);
