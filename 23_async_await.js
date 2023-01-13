const printHello = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Friends.");
  }, 2000);
});

const printUser = (user = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) return reject("Please provide user details.");
      resolve(`${user?.name || "Unkown"}, ${user?.city || "Unkown"}`);
    }, 2000);
  });
};

const Add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

const myFunction = async () => {
  const hello = await printHello;
  console.log(hello);

  const user_1 = await printUser({ name: "Parth", city: "Surat" });
  const user_2 = await printUser({});
  const user_3 = await printUser();
  console.log(user_1);
  console.log(user_2);
  console.log(user_3);

  const sum_1 = await Add(1, 2);
  const sum_2 = await Add(sum_1, 3);
  const sum_3 = await Add(sum_2, 4);
  const sum_4 = await Add(sum_3, 5);
  const sum_5 = await Add(sum_4, 6);
  console.log(sum_5);
};
myFunction();
