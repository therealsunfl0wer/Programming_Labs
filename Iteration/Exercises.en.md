# Exercises

## Loop iteration

Implement function `sum(...args)` which sums all its arguments in five
different ways. Examples with results:

```js
const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7
```

1. `for` loop
2. `for..of` loop
3. `while` loop
4. `do..while` loop
5. `Array.prototype.reduce()`

## Iteration over 2D array

6. Find maximum element in 2D array

````js
const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
# Exercises

## Loop iteration

Implement function `sum(...args)` which sums all its arguments in five
different ways. Examples with results:

```js
const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7
````

1. `for` loop
2. `for..of` loop
3. `while` loop
4. `do..while` loop
5. `Array.prototype.reduce()`

## Iteration over 2D array

6. Find maximum element in 2D array

```js
const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(m); // 9
```

## Iteration over dictionary objects

7. Using `for..in` iterate over dictionary of birth and death years and
   return dictionary with ages. Example:

```js
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }
```
