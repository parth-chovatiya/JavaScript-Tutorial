const input1 = 0;
const input2 = 13;

let convertedTime;

const convertTime = (input) => {
  if (input == 0) {
    return "12am";
  }
  if (input == 12) {
    return "12pm";
  }

  if (input < 12) {
    return (input % 12) + "am";
  }
  return (input % 12) + "pm";
};

console.log(convertTime(12));
console.log(convertTime(20));
console.log(convertTime(0));
