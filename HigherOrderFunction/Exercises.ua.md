````markdown
## Функції вищого порядку

1. Реалізуйте функцію `iterate(object, callback)` яка буде ітерувати
   всі ключі переданого об'єкта та викликати для кожного `callback` з наступним
   контрактом `callback(key, value, object)`. Наприклад:

```js
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});
```

Вивід:

```
{ key: 'a', value: 1 }
{ key: 'b', value: 2 }
{ key: 'c', value: 3 }
```

2. Реалізуйте функцію `store(value)` яка збереже значення в замиканні
   повернутої функції, а після її виклику поверне значення з замикання, як у
   наступному прикладі:

```js
const read = store(5);
const value = read();
console.log(value); // Output: 5
```

3. Реалізуйте функцію `contract(fn, ...types)` яка обгортає `fn` (перший
   аргумент) і перевіряє типи аргументів (усі аргументи, крім першого і
   останнього) і тип результату (останній аргумент), викидаючи `TypeError`, якщо
   типи не співпадають. Як у наступному прикладі:

```js
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5
```
````
