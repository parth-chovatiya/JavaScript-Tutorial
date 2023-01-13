function myFunc() {
  console.log("myFunc");
}

myFunc();

function collegeName(clg, city = "Unknown") {
  console.log(`${clg} - ${city}`);
}
collegeName("BVM");
collegeName("GCET", undefined);

myName("Abc");
function myName(name) {
  console.log("Your name: ", name);
}
myName("Xyz");

// mySurname("qwe");    // surname will treat as variable as js iterate code only once
var mySurname = function (surname) {
  console.log("Your surname: ", surname);
};
mySurname("asd");

[1, 2].forEach((x) => console.log(x))