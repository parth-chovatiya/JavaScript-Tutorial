const person = {
  firstName: "Parth",
  lastName: "Chovatiya",
  college: "BVM",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
  get getClgName() {
    return this.college;
  },
  set setCityName(city) {
    this.city = city;
  },
};

console.log(typeof person);

// x and person will point to the same memory location
const x = person;

x.firstName = "A";

person.age = 20;

console.log(person);
console.log(x);

delete person.age;
// delete person["age"]

console.log(person);
console.log(x);

const obj_1 = new Object();
obj_1.firstName = "Parth";

console.log(obj_1);

for (let x in person) {
  console.log(`${x} - ${person[x]}`);
}

person.cars = {
  car1: "BMW",
  car2: "TATA",
};

console.log(person);
console.log(person.fullname());

const keys = Object.keys(person); // it will give keys
const value = Object.values(person); // it will give values

console.log(keys);
console.log(value);

const myJSON = JSON.stringify(person);
console.log(myJSON);
console.log(typeof myJSON); // string

const myOBJ = JSON.parse(myJSON);
console.log(typeof myOBJ); // object
console.log(myOBJ);

const arr = ["a", "b", "c", "d"]; // ["a","b","c","d"]
console.log(JSON.stringify(arr));

console.log(person.getClgName);
person.setCityName = "Mumbai";
console.log(person);
