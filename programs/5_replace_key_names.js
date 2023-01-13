const obj = {
  name: "JJ",
  job: "Programmer",
  age: 22,
};
const renameKey = {
  name: "firstName",
  job: "Role",
};

for (let keyName in renameKey) {
  obj[renameKey[keyName]] = obj[keyName];
  delete obj[keyName];
}

console.log(obj);
