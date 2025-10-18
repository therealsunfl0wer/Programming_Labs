'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = { // Phonebook 2: the electric boogaloo
  mama: '+380445554433',
  fatha: '+380445554434',
  sistah: '+380445554434',
};

const findPhoneByName = (name) => phonebook[name];

console.dir(findPhoneByName('fatha'));

module.exports = { phonebook, findPhoneByName };
