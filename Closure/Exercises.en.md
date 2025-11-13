# Closures and chaining

1. Implement function `seq(...args)` using closures and chaining, which can be
   called in chain with arbitrary number of functions, and the first call with a
   value of type `Number` will execute previously passed functions and returned
   result should be as in the examples:

```js
seq((x) => x + 7)((x) => x * 2)(5);

// Result: 17
```

```js
seq((x) => x * 2)((x) => x + 7)(5);

// Result: 24
```

```js
seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7);

// Result: 3
```

2. Implement function `array()` creating a functional object that contains an
   array in its closure and provides the following interface:

- Create new instance: `const a = array();`
- Get element by index: `a(i)`
- Push element to the end: `a.push(value)`
- Pop last element and return it: `a.pop()`

Usage example:

```js
const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0)); // Output: first
console.log(arr(1)); // Output: second
console.log(arr(2)); // Output: third

console.log(arr.pop()); // Output: third
console.log(arr.pop()); // Output: second
console.log(arr.pop()); // Output: first

console.log(arr.pop()); // Output: undefined
```
