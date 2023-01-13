const isSame = (obj1, obj2) => {
  const obj1_keys = Object.keys(obj1);
  const obj2_keys = Object.keys(obj2);

  const check1 = obj1_keys.every((key, index) => {
    if (typeof obj1[key] === "object") {
      return isSame(obj1[key], obj2[key]);
    } else {
      return obj1[key] === obj2[key];
    }
  });

  const check2 = obj2_keys.every((key, index) => {
    if (typeof obj2[key] === "object") {
      return isSame(obj1[key], obj2[key]);
    } else {
      return obj1[key] === obj2[key];
    }
  });

  return check1 && check2;
};

const o1 = {
  name: "Parth",
  city: "Surat",
  arr: [1, 2, 3, 4],
  address: {
    state: "Gujarat",
  },
};
const o2 = {
  name: "Parth",
  city: "Surat",
  arr: [1, 2, 3],
  address: {
    state: "Gujarat",
  },
};

console.log(isSame(o1, o2));
