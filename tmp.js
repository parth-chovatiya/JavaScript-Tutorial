const obj = {
  name: "Parth",
};

const arr = [1000, 2000, 3000];

function func() {}

const myFunction = (ele) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello ", ele);
      resolve(ele);
    }, ele);
  });
};

const Function_1 = async (ele) => {
  const data = await myFunction(ele);
  console.log(data);
};

for (let ele of arr) {
  Function_1(ele);
}

() => {

}

