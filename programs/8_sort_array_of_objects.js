const input = [
  { name: "fred", age: 48, city: "Surat" },
  { name: "barney", age: 36, city: "Mumbai" },
  { name: "fred", age: 48, city: "Pune" },
  { name: "parth", age: 20, city: "Surat" },
  { name: "ronak", age: 21, city: "Amreli" },
];

const ordered_by = ["name", "age", "city"];
const orders = ["desc", "asc", "desc"];

input.sort((obj1, obj2) => {
  for (let x in ordered_by) {
    if (obj1[ordered_by[x]] == obj2[ordered_by[x]]) continue;

    if (orders[x] === "asc")
      return obj1[ordered_by[x]] < obj2[ordered_by[x]] ? -1 : 1;

    return obj1[ordered_by[x]] > obj2[ordered_by[x]] ? -1 : 1;
  }
});

console.log(input);
