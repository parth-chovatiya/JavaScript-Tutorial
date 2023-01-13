let inputString = "col1,col2,col3\na,b\nc,d,e\na,r";

const keyValues = inputString.split("\n");

const keys = keyValues[0].split(",");
console.log(keys)
console.log(keyValues)
keyValues.splice(0, 1);


const arr = keyValues.map((ele) => {
  let values = ele.split(",");

  let res = {};
  keys.forEach((k, index) => (res[k] = values[index] || "Unkown"));
  return res;
});

console.log(arr);
