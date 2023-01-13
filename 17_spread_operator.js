const MergeTwoArray = (arr1, arr2 = []) => {
  return [...arr1, ...arr2];
};
console.log(MergeTwoArray([1, 2, 3], [3, 4, 5]));
console.log(MergeTwoArray([3, 4, 5]));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, ...arr1, 8, 9];
console.log(arr2);
function jack(...x) {
  console.log(x);
  console.log(typeof x);
}
jack(arr1);
jack(...arr1);
console.log(...arr1);
const details = {
  city: "Surat",
  state: "Gujarat",
  country: "India",
};

const user_1 = {
  name: "Parth",
  ...details,
  college: "BVM",
};

console.log(user_1);
