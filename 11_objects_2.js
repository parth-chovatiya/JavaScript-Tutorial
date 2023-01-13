const obj = {
  counter: 0,
};

// Object.defineProperty() -> used to add getter & setter
// - static method defined a new property directly on an object

Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "add", {
  set: function (add) {
    this.counter += add;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "test", {
  value: "This is test property.",
  writable: false,
});

console.log(obj.counter);
obj.increment;
console.log(obj.counter);
obj.add = 2;
console.log(obj.counter);
obj.reset;
console.log(obj.counter);
console.log(obj.test);
obj.test = "This is ...";   // this will not be writtern as writable is false
console.log(obj.test);


// Object.defineProperies() -> static methods defined new or modified existing properties directly on object
const obj_1 = {
    city: "Surat"
}
Object.defineProperties(obj_1, {
    property_1: {
        value: "This is first property.",
        writable: false
    },
    property_2: {
        value: "This is second property.",
        writable: true
    }
})

console.log(obj_1.property_1)
console.log(obj_1.property_2)

obj_1.property_1 = "first"
obj_1.property_2 = "second"

console.log(obj_1.property_1)
console.log(obj_1.property_2)

