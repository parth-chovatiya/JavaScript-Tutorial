const user_1 = {
  name: "Parth",
  city: "Surat",
};

const displayUser = function () {
  return `name: ${this.name}, 



  city: ${this.city}`;
};

const user_1_info = displayUser.call(user_1);
console.log(user_1_info);
