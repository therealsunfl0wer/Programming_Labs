````markdown
# Composition

1. Implement `pipe` function composing passed arguments from left to right.
   `const pipe = (...fns) => x => ...`. If at least one argument is not a
   function, `pipe` should throw an error. For example, given three functions:

```js
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
```

Compose them: `const f = pipe(inc, twice, cube);` then calling `const x = f(5);`
should produce `1728`. If we compose `const f = pipe(inc, inc);` then calling
`const x = f(7);` will produce `9`. But if a non-function is passed to `pipe`,
for example: `const f = pipe(inc, 7, cube);` then `pipe` should immediately throw
an error.

2. Implement right-to-left composition (without recursion) which should
   suppress thrown errors: if a composed function throws, execution finishes with
   `undefined`, and errors can be subscribed to via `f.on('error', e => { ... });`.
````
