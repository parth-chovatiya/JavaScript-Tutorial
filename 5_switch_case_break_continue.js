const num = 2;

switch (num) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log(">2");
    break;
}

let n = "1";
// + it will convert to Number
switch (+n) {
  case 1:
  case 2:
    // One Two, both will share same code
    console.log("One or Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Default");
}

let x = console.log(1); // x will store undefined
console.log(x);

// What is we want to break multiple nested loops
// we can provide labels to the loop

outer: for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 6; j++) {
    if (i == 1 && j == 2) break outer; // it will go out from both of loop
    console.log(`${i} - ${j}`);
  }
}

console.log("Done.");

prime: for (let i = 2; i < 12; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      // If condition true, loop will start from first loop
      continue prime;
    }
  }
  console.log(i);
}

console.log("Done!");
