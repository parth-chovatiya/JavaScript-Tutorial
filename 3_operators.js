// There are different types of JavaScript operators:

// Assignment Operators -> = += -= *= /= %= **= <<= >>= >>>= &= ^= != &&= ||= ??=
// Arithmetic Operators -> % ++ -- - + **
// Comparison Operators -> === !== < > <= >=
// Logical Operators -> && || !
// Bitwise Operator -> & | ^ ~ << >> >>>(unsigned right shift)
// Ternary operator -> (condition ? val1 : val2)
// Relational operators -> in, instanceof

const obj = {
  a: 1,
  b: {
    c: 4,
  },
};

console.log(obj.a && obj.b.c);

let result_1 = 10 + "20";
console.log(result_1); // 1020

let result_2 = "20" + 10;
console.log(result_2); // 2010

let result_3 = "4" * 3;
console.log(result_3);

let result_4 = 3 * "4";
console.log(result_4);

let result_5 = "20" / 2;
console.log(result_5);

let result_6 = 20 / "2";
console.log(result_6);

// Relational operator
const arr = [1, 2, 3, 4, 5];
console.log(3 in arr);

const date = new Date();
console.log(date instanceof Date);
