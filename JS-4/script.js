// Задание 1 Переделать сокращенней

// function camelize(str) {
//     if (typeof str === 'string' && str.split('-').length > 1) {
//         let splited = str.toLowerCase().split('-');
//         let res = splited.slice(1).map(item => item[0].toUpperCase() + item.slice(1));
//         return splited[0] + res.join('');
//     } else return str;
// }

// console.log(camelize('-my-short-string'));

// Задание 2

// function filterRange(arr, a, b) {
//     let filtered = arr.filter(item => item >= a && item <= b);
//     return filtered;
// }

// console.log(filterRange([5, 3, 1, 8], 1, 4));

// Задание 3

// function filterRangeInPlace(arr, a, b) {
//     arr.forEach((element, index, array) => {

//         if (!(a <= element && element <= b)) {
//             array.splice(index, 1);
//         }

//     });
// }
// let arr = [5, 3, 1, 8];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// Задание 4

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// Задание 5

// function copySorted(arr) {
//     if (Array.isArray(arr) && arr.length > 0) {
//         let copy = [...arr];
//         return copy.sort();
//     } else return 'incorrect data';
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arr));
// console.log(arr);

// Задание 6 Калькулятор що розширюеться (Вибачаюсь, завантажу у вівторок ввечері)


// Задание 7

// let vasya = { name: "Вася", age: 25};
// let petya = { name: "Петя", age: 30};
// let masha = { name: "Маша", age: 28};
// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);
// console.log(names);

// Задание 8

// function sortByAge(users) {
//     if (users.every(el => el.hasOwnProperty("age"))) {
//         return users.sort((a, b) => a.age - b.age);
//     } else return 'Can not sort by age';
// }

// let vasya = { name: " Вася ", age: 25 };
// let petya = { name: " Петя ", age: 30 };
// let masha = { name: " Маша ", age: 28 };

// let arr = [vasya, petya, masha];

// console.log(sortByAge(arr));

// Задание 9

// function getAverageAge(users) {
//     return users.reduce((acc, item) => acc + item.age, 0)
//         / users.filter(item => item.hasOwnProperty("age")).length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];
// console.log(getAverageAge(arr));

// Задание 10

// function unique(arr) {
//     if (Array.isArray(arr) && arr.length > 0) {
//         let filtered = arr.filter((item, index, array) => array.indexOf(item) === index);
//         return filtered;
//     } 
//     return 'Incorrect data';
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "крішна", ":-O"];
// console.log(unique(strings));

// Задание 11

// function unique(arr) {
//     if (typeof arr[Symbol.iterator] === 'function') {
//         return [...new Set(arr)];
//     }
//     return 'sss';
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// console.log(unique(values));

// Задание 12

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++;
//     };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();

// alert (counter ()); // 0
// alert (counter ()); // 1
// alert (counter2 ()); // 0
// alert (counter2 ()); // 1

// У счетчиков counter и counter2 разные лексические окружения в которых они замыкают свои переменные и их значения

// Задание 13

// function Counter() {
//     let count = 0;
//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return -count;
//     };
// }

// let counter = new Counter();

// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down() ); // -2

// Объект счетчика внутри функции присваивается this и замыкает в себе значения пеереданные в нее. 
// Для нового объекта переменная count будет иметь свое значение

// Задание 14

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
// }
