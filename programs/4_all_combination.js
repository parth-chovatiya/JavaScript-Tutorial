let input = [1, 2];

let output1 = [];
let output2 = [];

const myFunction = (input) => {
  let len = input.length;

  for (let i = 0; i < 1 << len; i++) {
    let combination = [];
    let index = 0,
      num = i;
    while (num) {
      if (num & 1) {
        combination.push(input[index]);
      }
      index++;
      num >>= 1;
    }
    output1.push(combination);

    let x = i;
    output2.push(
      input.reduce((res, ele, index) => {
        if (x & 1) {
          res.push(ele);
        }
        x >>= 1;
        return res;
      }, [])
    );
  }
};
myFunction(input);

console.log(output1);
console.log(output2);

// [1, 2, 3, 4];
let output3 = input.reduce((arr, ele, index) => {
  
}, [[]]);
console.log(output3);
