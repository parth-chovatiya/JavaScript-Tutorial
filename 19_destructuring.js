const user_1 = {
  name: "Parth",
  college: "BVM",
  city: "Surat",
};

const printUser = ({ name = "firwjo", college, city = "Abc" } = user = {}) => {
  console.log(`Name: ${name}, College: ${college}, City: ${city}`);
};

printUser(user_1);
printUser();
