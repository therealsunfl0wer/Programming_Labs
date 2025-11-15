# Exercises: Functions

1. Implement function `random(min, max)` returning pseudo-random value from
   `min` to `max`. Use `Math.random()` and `Math.floor()`. When called as
   `random(max)` treat `min = 0`.
2. Implement function `generateKey(length, characters)` returning a string
   of random characters from `characters` of length `length`. For example:

```js
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
```

3. Convert IPv4 address to a number containing 4 bytes shifted as follows:

- 1st byte shifted left by 3 \* 8 bits
- 2nd byte shifted left by 2 \* 8 bits
- 3rd byte shifted left by 1 \* 8 bits
- 4th byte not shifted
  Example: '10.0.0.1' -> parse string to ['10','0','0','1'], to numbers [10,0,0,1]
  shift and sum to get 167772161. Optimize using `Array.prototype.reduce`.
  Default argument: '127.0.0.1'. Examples:

```
127.0.0.1       ->  2130706433
10.0.0.1        ->   167772161
192.168.1.10    -> -1062731510
165.225.133.150 -> -1511946858
0.0.0.0         ->           0
8.8.8.8         ->  0x08080808
```

4. Implement object introspection:

- Iterate all keys of object `iface`
- Take keys of function type
- For each function get number of arguments
- Save results into a two-dimensional array
  Example input:

```js
{
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
```

should yield:

```js
[
  ["m1", 1],
  ["m2", 2],
  ["m3", 3],
];
```
