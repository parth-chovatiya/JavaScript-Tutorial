const input = [
  { col1: "a", col2: "b" },
  { col1: "c", col2: "d", col3: "e" },
  { col1: "aa", col2: "bb" },
];

let keys = [];
let values = [];

const data = input.map((obj, index) => {
  let k = Object.keys(obj);
  let v = Object.values(obj);

  k.forEach((e) => {
    if (!keys.includes(e)) {
      keys.push(e);
    }
  });

  values.push(v);
});

let output = keys.join(",");
values.forEach((v) => {
  output = output.concat("/n");
  output = output.concat(v.join(","));
});

console.log(output);
