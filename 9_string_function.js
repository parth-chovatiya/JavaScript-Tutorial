let str = "This is a very big string. As you know that, it is very big.";

// 0 1 2 3 4 5 6 ...  --> +ve will start from front and starting index will be 0
// ... -5 -4 -3 -2 -1   --> -ve will start from end and starting index will be -1

console.log(str.length);

// Three methods for extracting part of string
// - slice(start, end)
// - substring(start, end)
// - substr(start, length)

// slice(start, end)
// slice extract a part of string & return extracted part in the new string
let newStr_1 = str.slice(3, 10); // 10th will not take
console.log(newStr_1);

let newStr_2 = str.slice(3); // by omiting one argument, js will take whole string starting from that char
console.log(newStr_2);

let newStr_3 = str.slice(-9, -2); // (-9, -2})
console.log(newStr_3);

let newStr_4 = str.slice(-4); // (-4, to end]
console.log("newStr_4 --> ", newStr_4);

// substring(start, end)
// same as slice, just difference is that, just diff is that, start & end value which are less then 0 are treated as 0
// substring will consider -ve value to 0
let newStr_5 = str.substring(3, 10);
console.log(newStr_5);

let newStr_6 = str.substring(3);
console.log(newStr_6);

let newStr_7 = str.substring(-9, -2); // (0, 0)
console.log("newStr_7 --> ", newStr_7);

let newStr_8 = str.substring(-4); // -4 -> it will be 0
console.log(newStr_8);

// substr(start, length)
// similar to the slice, here 2nd parameter will specifies the length of the stbstring
let newStr_9 = str.substr(2);
console.log(newStr_9);

let newStr_10 = str.substr(3, 9);
console.log(newStr_10);

let newStr_11 = str.substr(-10);
console.log(newStr_11);

let text = "Hello, This is only for testing purpose. only for testing.";
let newText_1 = text.replace("only", "."); // replace will replace only one word, which is nearest from starting, rpelace only first match
let re = new RegExp("only")
let newStr = text.replace(re, '+')
console.log('newStr --- ', newStr)
console.log(newText_1);

let newText_2 = text.replaceAll("only", "..");
console.log(newText_2);

let newText_3 = text.toUpperCase();
let newText_4 = text.toLowerCase();

console.log(newText_3);
console.log(newText_4);

let text1 = "Hello";
let text2 = "Friends";

let text3 = text1.concat(" ", text2, "!");
console.log(text3);

let text4 = "   Hii ";
let newText_5 = text4.trim();
console.log(newText_5);

let newText_6 = text4.trimStart();
let newText_7 = text4.trimEnd();

console.log(newText_6);
console.log(newText_7);

let newText_8 = str.charAt(5);
console.log(newText_8);

// charCodeAt() -> it will return unicode of the character at a specified index in strign
let newText_10 = str.charCodeAt('A');
console.log("charCodeAt - ", newText_10);

let str_1 = "Hello My name is Parth Chovatiya.";
const newText_9 = str_1.split(" ");
console.log(newText_9);
console.log(typeof newText_9);

let str_2 = "57";
let padded = str_2.padStart(4, "q");
console.log(padded);

// indexOf -> it will return index of the furst occurence
// it not found, it will return -1
let First_idx = str.indexOf("very");
console.log(First_idx);

// lastIndexOf -> it will return index of the last occurence
let Last_idx = str.lastIndexOf("very");
console.log(Last_idx);

let search_idx = str.search("very");
console.log(search_idx);

// diff b/w indexOf() & search()
// - search() method cannot take a second start position argument.
// - indexOf() method cannot take powerful search values (regular expressions).

let inc = str.includes("Very");
console.log(inc);
