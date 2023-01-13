// Promise to print Hello
const printHello = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello Friends!");
    resolve("How r u?");
  }, 3000);
});
printHello.then((msg) => console.log(msg)).catch((err) => console.log(err));

// Promise to print User details
const printUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user) return reject("Please provide user details.");
      //   resolve(`${user?.name || "Unkown"}, ${user?.city || "Unkown"}`);
      reject("Error occured.");
    }, 2000);
  });
};

printUser({ name: "Parth", city: "Surat" })
  .finally(() => {
    // used to do generic cleanup,
    // we can close database connections
    // we can stop processes we want
    // finally doesn't return value, if it return, it will be ignored
    // if finally throws error, it will be handled in the nearest catch block
    console.log("finally will always run.");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   This is also true, first argument will for successful & second argument will be for error
printUser({ name: "Ronak", city: "Amreli" }).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

printUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

printUser({})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Promises to add numbers
const Add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};
Add(1, 2)
  .then((sum) => console.log(sum))
  .catch((error) => console.log(error));

Add(1, 2)
  .then((sum) => {
    Add(sum, 3)
      .then((sum) => {
        Add(sum, 4)
          .then((sum) => console.log(sum))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));

Add(1, 2)
  .then((sum) => Add(sum, 3))
  .then((sum) => Add(sum, 4))
  .then((sum) => Add(sum, 5))
  .then((sum) => console.log(sum))
  .catch((error) => console.log(error));

// Let's say we want many promises to execute in parallel & wait until all of them are completed
// Promise.all -> will usefull in that cases
// - takes an iterable & return new Promise
// - reject whole promise if any promise reject -> all or nothing
const myPromise_all = Promise.all([
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(2);
    }, 2000)
  ),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6);
    }, 6000);
  }),
]);

myPromise_all
  // in the data, array will be received
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


//  Promise.allSettled() - waits for all promises to settle & return their result as an array  
const myPromise_all_settled = Promise.allSettled([
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(2);
    }, 2000)
  ),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occured")
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6);
    }, 6000);
  }),
]);

myPromise_all_settled
  .then((data) => {
    console.log("Promise.allSettled()", data);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.race will is similar to Promise.all with only difference is that,
// The promise which take less time will be execute & rest of will be ignored
const myPromise_race = Promise.race([
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(2);
    }, 2000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(4);
    }, 4000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("- Error occure after 1 second");
    }, 1000)
  ),
]);

myPromise_race
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.any - wait till first Promise resolve
// - if all of are reject, it will return AggregateError
const myPromise_any = Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(2);
    }, 2000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(4);
    }, 4000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject("- Error occure after 1 second");
    }, 1000)
  ),
]);

myPromise_any
  .then((data) => {
    console.log("In the Promise.any()", data);
  })
  .catch((error) => {
    console.log(error);
  });
