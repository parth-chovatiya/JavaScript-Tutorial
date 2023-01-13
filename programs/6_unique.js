const input = [1, 2, 2, 3, 4, 4, 5];

// using frequency
const freq = {};
input.forEach((x) => {
  freq[x] = (freq[x] ?? 0) + 1;
});

let unique_1 = [];
for (let key in freq) {
  if (freq[key] === 1) {
    unique_1.push(parseInt(key));
  }
}
console.log(unique_1);

// Another way
let unique_2 = input.filter(
  (element) => input.indexOf(element) === input.lastIndexOf(element)
);
console.log(unique_2);
