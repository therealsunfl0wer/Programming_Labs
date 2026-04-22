const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// MAIN

function asyncMapCB(arr, cb, { signal, onAbort } = {}) {
  // try/catch doesn't work with timeouts, so we use primitive error handling
  if (signal) signal.throwIfAborted();

  const timeout = setTimeout(() => {
    if (signal && signal.aborted) {
      if (onAbort) onAbort(signal.reason);
      else console.error("Aborted: ", signal.reason);
      return "aborted";
    }
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

  if (signal) {
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(timeout);
        if (onAbort) onAbort(signal.reason);
        else console.error("Aborted (from signal): ", signal.reason);
      },
      { once: true }
    );
  }

  return "pending";
}

function asyncMapPromise(arr, cb, { signal } = {}) {
  return new Promise((resolve, reject) => {
    if (signal) signal.throwIfAborted();

    const timeout = setTimeout(() => {
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

    if (signal) {
      signal.addEventListener(
        "abort",
        () => {
          clearTimeout(timeout);
          reject(signal.reason);
        },
        { once: true }
      );
    }
  });
}

async function asyncMapAsyncAwait(arr, cb, { signal } = {}) {
  // try/catch works here
  try {
    if (signal) signal.throwIfAborted();
    const result = await asyncMapPromise(arr, cb, { signal });
    console.log("Async/Await result: " + result);
  } catch (error) {
    console.error("Async/Await aborted: " + error);
  }
}

function mapCallback(el) {
  el = el * 2;
  console.log(el);
  return el;
}

// USAGE

//callbacks
const cbAbortCtl = new AbortController();
const cbAbortSignal = cbAbortCtl.signal;

console.log(
  "Calling pseudo-asynchronous function: " +
    asyncMapCB([1, 2, 3], mapCallback, {
      signal: cbAbortSignal,
      onAbort: (reason) => {
        console.error("Callback operation aborted: ", reason);
      },
    })
);

setTimeout(() => {
  cbAbortCtl.abort("random timeout");
}, randInt(500, 1500));

console.log(
  "Concurrency test after calling asyncMapCB\n" +
    "here's a random number (1st time): " +
    randInt(1, 100)
);

//Promises

const promiseAbortCtl = new AbortController();
const promiseAbortSignal = promiseAbortCtl.signal;

asyncMapPromise([1, 2, 3], mapCallback, { signal: promiseAbortSignal })
  .then((result) => {
    console.log("Promise resolved with:", result.toString());
  })
  .catch((err) => {
    console.error("Promise error:", err);
  });

setTimeout(() => {
  promiseAbortCtl.abort("random timeout");
}, randInt(500, 1500));

console.log(
  "Concurrency test after calling asyncMapPromise\n" +
    "here's a random number (2nd time): " +
    randInt(1, 100)
);

//async/await

console.log("Calling async/await function: ");

const asyncAwaitAbortCtl = new AbortController();
const asyncAwaitAbortSignal = asyncAwaitAbortCtl.signal;

asyncMapAsyncAwait([1, 2, 3], mapCallback, { signal: asyncAwaitAbortSignal });

setTimeout(() => {
  asyncAwaitAbortCtl.abort("random timeout");
}, randInt(500, 1500));

console.log(
  "Concurrency test after calling asyncMapAsyncAwait\n" +
    "here's a random number (3rd time): " +
    randInt(1, 100)
);
