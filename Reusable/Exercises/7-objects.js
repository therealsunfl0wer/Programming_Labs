// noinspection JSVoidFunctionReturnValueUsed

'use strict';
/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const cObj = { name: 'cName' };
  const vObj = { name: 'vName' };

  // console.dir(cObj.name + ' <- const, var -> ' + vObj.name);


  // const anotherObj = { name: 'another name' };

  // Entries in both objects are editable,
  // but the constant is un-reassignable
  vObj.name = 'a better name';
  cObj.name = 'a better name';

  // console.dir(cObj.name + ' <- const, var -> ' + vObj.name);

  // Assigning object to an entry outputs "[object Object]"
  /*
  vObj.name = anotherObj;
  cObj.name = anotherObj;
  */

  // console.dir(cObj.name + ' <- const, var -> ' + vObj.name);
};

console.dir(fn());

module.exports = { fn };
