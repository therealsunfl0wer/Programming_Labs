const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// MAIN

function asyncMapCB(arr, cb) {
  // try/catch doesn't work with timeouts, so we use primitive error handling
  setTimeout(() => {
    if (arr.length === 0) {
      console.error("Array is empty");
      return "rejected";
    }
    let returnArr = [];
    for (let i = 0; i < arr.length; i++) {
      returnArr.push(cb(arr[i]));
    }
    return returnArr, "fulfilled";
  }, randInt(500, 1500));
  return "pending";
}

function asyncMapPromise(arr, cb) {
  return new Promise((resolve, reject) => {
    // try/catch won't work either
    setTimeout(() => {
      if (arr.length === 0) {
        reject("Array is empty");
        return;
      }
      let returnArr = [];
      for (let i = 0; i < arr.length; i++) {
        returnArr.push(cb(arr[i]));
      }
      resolve(returnArr);
    }, randInt(500, 1500));
  });
}

async function asyncMapAsyncAwait(arr, cb) {
  // try/catch works here
  try {
    const result = await asyncMapPromise(arr, cb);
    console.log("Async/Await result: " + result);
  } catch (error) {
    console.error("Async/Await error: " + error);
  }
}

function mapCallback(el) {
  el = el * 2;
  console.log(el);
  return el;
}

// USAGE

console.log(
  "Calling pseudo-asynchronous function: " + asyncMapCB([1, 2, 3], mapCallback)
);
console.log(
  "Random operation after calling asyncMapCB\n" +
    "here's a random number (1st time): " +
    randInt(1, 100)
);

console.log(
  "Calling Promise-returning function: " +
    asyncMapPromise([1, 2, 3], mapCallback).then((result) => {
      console.log("Promise resolved with: " + result);
    })
);
console.log(
  "Random operation after calling asyncMapPromise\n" +
    "here's a random number (2nd time): " +
    randInt(1, 100)
);

console.log(
  "Calling async/await function: " + asyncMapAsyncAwait([1, 2, 3], mapCallback)
);
console.log(
  "Random operation after calling asyncMapAsyncAwait\n" +
    "here's a random number (3rd time): " +
    randInt(1, 100)
);
