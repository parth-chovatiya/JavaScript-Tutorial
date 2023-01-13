// Promises object responsible to completion or failer of asyncronous operations
// A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation was completed successfully.
// - rejected: meaning that the operation failed.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Hello");
    resolve("Resolve");
  }, 3000);
});

myPromise
  .then((data) => {
    console.log(data);
    return myPromise;
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const myFunctions = async (callback) => {
  const data = await myPromise;
  console.log(data)
  callback(data)
};

myFunctions((data) => {
    console.log(data)
})