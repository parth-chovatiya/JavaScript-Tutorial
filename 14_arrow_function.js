const doSum = (a, b) => a + b;
console.log(doSum(3, 4));

const Multiply = (...arr) => {
  return arr.reduce((prev, ele) => {
    return prev * ele;
  }, 1);
};
console.log(Multiply(1, 2, 3, 4));

// globalThis will be reference to actually global object
globalThis.city = "Mumbai";
const user_1 = {
  name: "Parth",
  city: "Surat",
  displayName: function () {
    // here, this will point to that object
    return this.name;
  },
  displayCity: () => {
    // ḥere, in the arrow function, this will point to the one level above
    return this.city;
  },
  display() {
    console.log(`Name: ${this.name}, city: ${this.city}`);
  },
};

const displayUserInfo = function (state = "Unkown") {
  console.log(`Name: ${this.name}, City: ${this.city}, state: ${state}`);
};

console.log(user_1.displayName());
console.log(user_1.displayCity());
user_1.display();

const user_2 = {
  name: "Ronak",
  city: "Amreli",
};
displayUserInfo.call(user_1);
displayUserInfo.call(user_2, "Gujarat");

displayUserInfo.apply(user_1, ["Pubjab"]);
const myDisplay = displayUserInfo.bind(user_1, "Gujarat");
myDisplay();


