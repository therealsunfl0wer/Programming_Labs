/*
1.	Core Memoization Functionality
	•	Accept a pure function and return a memoized version of it.
	•	Store previously computed results to avoid recomputation.
2.	Cache Storage and Lookup
	•	Cache function calls based on input arguments as keys.
	•	Support configurable cache size (default: unlimited).
*/

function memoize(fn, cacheSize = Infinity) {
  const newKey = (...args) => args.map((arg, i) => [i, arg, typeof arg]);
  const cache = new Map();
  return function (...args) {
    const key = newKey(...args);
    console.log(`[Memo] The key is ${JSON.stringify(key)}`);
    if (cache.has(key)) {
      console.log(`[Memo] Cache hit for key: ${JSON.stringify(key)}`);
      return cache.get(key);
    }
    console.log("[Memo] Cache miss, calculating");
    const calc = fn(...args);
    if (cache.size < cacheSize) {
      cache.set(key, calc);
      console.log(
        `[Memo] Caching ${JSON.stringify(key)}: ${JSON.stringify(calc)}`
      );
    } else {
      console.log("[Memo] Cache full, not saving");
    }
    return calc;
  };
}

// Usage (example copied from https://github.com/HowProgrammingWorks/Memoization/JavaScript/1-memoize.js)

const sumSeq = (a, b) => {
  console.log("Calculate sum");
  let r = 0;
  for (let i = a; i < b; i++) r += i;
  return r;
};

const timer = (fn) => {
  return function (...args) {
    const start = process.hrtime();
    const result = fn(...args);
    const end = process.hrtime(start);
    const durationNs = (end[0] * 1e9 + end[1]).toFixed(0);
    console.log(`[Timer] ${fn.name || "unnamed"} took ${durationNs}ns`);
    return result;
  };
};

const mSumSeq = memoize(timer(sumSeq));

console.log("First call mSumSeq(2, 100)");
console.log("Value:", mSumSeq(2, 100));

console.log("Second call mSumSeq(2, 100)");
console.log("From cache:", mSumSeq(2, 100));

console.log("Call mSumSeq(2, 6)");
console.log("Calculated:", mSumSeq(2, 6));
