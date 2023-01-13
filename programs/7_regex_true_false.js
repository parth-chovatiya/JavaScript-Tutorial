const yes = new RegExp("^y(es)?$", "i");
const no = new RegExp("^n(o)?$", "i");

const input1 = "yes";

const TrueFalse = (input) => {
  if (yes.test(input)) {
    return true;
  }
  if (no.test(input)) {
    return true;
  }
  return false;
};

console.log(TrueFalse(input1));
