````markdown
## Робота з масивами та використання методів Array

1. Реалізуйте функцію `removeElement(array, item)` для видалення елемента `item`
   з масиву `array`. Наприклад:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
```

або

```js
const array = ["Kiev", "Beijing", "Lima", "Saratov"];
removeElement(array, "Lima"); // видалить 'Lima' з масиву
removeElement(array, "Berlin"); // не видалить нічого
console.log(array);
// Результат: ['Kiev', 'Beijing', 'Saratov']
```

2. Покращіть функцію з попереднього завдання для видалення кількох елементів з
   масиву `removeElements(array, item1, ... itemN)`. Наприклад:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]
```

або

```js
const array = ["Kiev", "Beijing", "Lima", "Saratov"];
removeElements(array, "Lima", "Berlin", "Kiev");
console.log(array);
// Результат: ['Beijing', 'Saratov']
```

3. Функція `unique(array)` повинна повертати новий масив, що не містить
   дублікати. Приклади виклику:

```js
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]
```

```js
const result = unique(["top", "bottom", "top", "left"]);
console.log(result);
// Результат: ['top', 'bottom', 'left']
```

4. Функція `difference(array1, array2)` повинна знаходити різницю між
   масивами, тобто повертати новий масив, що містить значення, які
   містилися в `array1`, але не містилися в `array2`. Приклади виклику:

```js
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]
```

```js
const array1 = ["Beijing", "Kiev"];
const array2 = ["Kiev", "London", "Baghdad"];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing']
```
````
