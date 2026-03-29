/*
3.	Cache Eviction Policies (Configurable)
	•	Least Recently Used (LRU): Remove the oldest unused entries when the cache reaches its maximum size.
	•	Least Frequently Used (LFU): Remove entries that are least accessed.
	•	Time-Based Expiry: Expire cache entries after a configurable time limit.
	•	Custom Policy: Allow users to pass a custom eviction function.
4.	Performance Considerations
	•	Avoid excessive memory consumption by automatically pruning the cache based on the selected strategy.
*/

// just as it was time to introduce policies i realized that if i simply initialize Maps,
// i'd have a whole 3 dimensions of them, so a class it is
class CacheEntry {
  constructor(value, ttl) {
    this.value = value;
    this.createdAt = Date.now();
    this.expiry = ttl ? this.createdAt + ttl : Infinity;
    this.accessCount = 1;
    this.lastAccessed = this.createdAt;
  }

  isExpired() {
    return Date.now() > this.expiry;
  }

  recordAccess() {
    this.lastAccessed = Date.now();
    this.accessCount++;
  }
}

function memoize(
  fn,
  cacheSize = Infinity,
  evictionPolicy = defaultPolicy,
  ttl = Infinity
) {
  const cache = new Map();
  const newKey = (...args) => args.map((arg, i) => [i, arg, typeof arg]);

  return function (...args) {
    const K = newKey(...args);
    console.log(`[Memo] The key is ${JSON.stringify(K)}`);

    if (cache.has(K)) {
      console.log(`[Memo] Cache hit for key: ${JSON.stringify(K)}`);
      const entry = cache.get(K);
      entry.recordAccess();
      return entry.value;
    }

    console.log("[Memo] Cache miss, calculating");
    const calc = fn(...args);

    if (cache.size < cacheSize) {
      cache.set(K, new CacheEntry(calc, ttl));
      console.log(
        `[Memo] Caching ${JSON.stringify(K)}: ${JSON.stringify(calc)}`
      );
    } else {
      console.log("[Memo] Cache full, running eviction policy");
      evictionPolicy(cache);
      cache.set(K, new CacheEntry(calc, ttl));
      console.log(
        `[Memo] Caching ${JSON.stringify(K)}: ${JSON.stringify(calc)}`
      );
    }
    return calc;
  };
}

function defaultPolicy() {
  console.log(
    "[Memo] No eviction policy is specified, the value WILL NOT be cached"
  );
  return;
}

function LRU(cache) {
  let key = null;
  let oldest = Infinity;
  for (const [k, entry] of cache.entries()) {
    if (entry.lastAccessed < oldest) {
      oldest = entry.lastAccessed;
      key = k;
    }
  }
  if (key) {
    console.log(`[LRU] Evicting key: ${JSON.stringify(key)}`);
    cache.delete(key);
  }
}

function LFU(cache) {
  let key = null;
  let leastUsed = Infinity;
  for (const [k, entry] of cache.entries()) {
    if (entry.accessCount < leastUsed) {
      leastUsed = entry.accessCount;
      key = k;
    }
  }
  if (key) {
    console.log(`[LFU] Evicting key: ${JSON.stringify(key)}`);
    cache.delete(key);
  }
}

function TTL(cache, ttl) {
  for (const [k, entry] of cache.entries()) {
    if (entry.isExpired()) {
      console.log(`[TTL] Evicting expired key: ${JSON.stringify(k)}`);
      cache.delete(k);
    }
  }
}

// Usage (example copied from https://github.com/HowProgrammingWorks/Memoization/JavaScript/1-memoize.js)

const sumSeq = (a, b) => {
  console.log("Calculate sum");
  let r = 0;
  for (let i = a; i < b; i++) r += i;
  return r;
};

// all of this was just to make sure it really did what it was supposed to do :(
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

// policy examples kindly provided by an LLM

console.log("\nTesting LRU eviction policy");
const mSumSeqLRU = memoize(timer(sumSeq), 2, LRU, Infinity);
mSumSeqLRU(1, 10);
mSumSeqLRU(10, 20);
mSumSeqLRU(20, 30); // Evicts (1, 10)
mSumSeqLRU(1, 10); // Cache miss

console.log("\nTesting LFU eviction policy");
const mSumSeqLFU = memoize(timer(sumSeq), 2, LFU, Infinity);
mSumSeqLFU(1, 10);
mSumSeqLFU(10, 20);
mSumSeqLFU(1, 10); // Access (1, 10) again
mSumSeqLFU(20, 30); // Evicts (10, 20)
mSumSeqLFU(10, 20); // Cache miss

console.log("\nTesting TTL eviction policy");
const mSumSeqTTL = memoize(timer(sumSeq), 2, TTL, 1000); // Evict entries older than 1 second
mSumSeqTTL(1, 10);
setTimeout(() => {
  mSumSeqTTL(10, 20);
}, 500);
setTimeout(() => {
  mSumSeqTTL(1, 10); // Cache hit
}, 800);
setTimeout(() => {
  mSumSeqTTL(20, 30); // Evicts (1, 10) due to TTL
}, 1500);
setTimeout(() => {
  mSumSeqTTL(1, 10); // Cache miss
}, 2000);
