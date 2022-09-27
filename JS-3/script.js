// Задание 1

// function isEmpty(obj) {
//     for (const prop in obj) {
//         if (Object.hasOwn(obj, prop)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isEmpty({}));

// Задание 2

// function multiplyNumeric(obj) {
//     for (const i in obj) {
//         if (Object.hasOwn(obj, i) && typeof obj[i] == 'number') {
//             obj[i] *= 2;
//         }
//     }
// }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// multiplyNumeric(salaries);
// console.log(salaries);

// Задание 3

// function readNumber() {
//     let num;
//     do {
//         num = prompt('Введите число');
//     } while (isNaN(+num));
//     return num == null || num == '' ? null : +num;
// }
// console.log(readNumber());

// Задание 4

// function random(min, max) {
//     return min + Math.random() * (max - min);
// }
// console.log(random(3, 8));

// Задание 5

// function randomInteger(min, max) {
//     return Math.floor(min + Math.random() * (max + 1 - min));
// }

// console.log(randomInteger(3, 7));

// Задание 6

// function ucFirst(str) {
//     if (typeof str === 'string') {
//         return str[0].toUpperCase() + str.slice(1);
//     } else return 'need string to check data';
// }

// Задание 7 

// function checkSpam(str) {
//     if (typeof str === 'string') {
//         let lowStr = str.toLowerCase();
//         return lowStr.includes('xxx') || lowStr.includes('viagra');
//     } else return 'need string to check data';
// }
// console.log(checkSpam('free xx'));

// Задание 8

// function truncate(str, maxlenght) {
//     if (typeof str === 'string' && parseInt(maxlenght) == maxlenght) {
//         if (str.length > maxlenght) {   
//             return str.replace(str.slice(maxlenght), '...');
//         } else return str;
//     } else return 'need string to check data and integer for maxlength';
// }

// console.log(truncate('Усим привит!', 20));

// Задание 9

// function extractCurrencyValue(str) {
//     if (typeof str === 'string') {
//         let splited = str.split(/[^0-9.]/g);
//         return +splited[splited.length-1];
//     } else return 'need string to check data';

// }
// console.log(extractCurrencyValue('$120'));

// Задание 10

// function sumInput() {
//     let arr = [], num;
//     do {
//         num = prompt('Введите любое число');
//         if (!isNaN(+num) && num != null && num != '') arr.push(num);
//     } while (!isNaN(+num) && num != null && num != '');
//     if (arr.length !== 0) {
//         return arr.reduce((acc, item) => acc + (+item), 0);
//     } else return 0;
// }
// console.log(sumInput());

// Задание 11

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm(' Батьки дозволили ?');
//     }
// }
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     // ...
//     return confirm(' Батьки дозволили ?');
// }

// Эти функции будут работать одинаково, независимо от наявности else.
// Многие рекомендуют не использовать else после return, так как в это нет надобности ведь 
// return завершит выполнения функции. Для читабельности кода в подобных случаях от else лучше избавиться



// Задание 12

// function checkAge(age) {
//     return age > 18 ? true : confirm( ' Батьки дозволили ?');
// }

// function checkAge(age) {
//     return age > 18 || confirm( ' Батьки дозволили ?');
// }

// console.log(checkAge(17));

// Задание 13

// function min(a, b) {
//     if (isFinite(a) && isFinite(b)) return a < b ? a : b;
// }

// console.log(min(3, -1));

// Задание 14

// function pow(x, n) {
//     let res;
//     if (Number.isInteger(x) && x > 0 && Number.isInteger(n) && n > 0) {
//         res = x;
//         for (let i = 1; i < n; i++) {   
//             res *= x;
//         }
//     } else return 'Некоректнi данi';
//     return res;
// }
// let x = +prompt('Введiть число');
// let n = +prompt('Введiть ступень');
// alert(pow(x, n));

// Задание 15


// let ask = (question, yes, no) => {
//     return confirm(question) ? yes() : no();
// }
// ask(
//     'Ви згоднi?',
//     () => alert ("Ви погодилися."),
//     () => alert ("Ви скасували виконання.")
// )

// Задание 16
// function calcTimeToSavings(salary, goal, monthlyExpenses, paymentsPerMonth) {

//     if (isFinite(salary) && isFinite(goal)
//         && isFinite(monthlyExpenses) && isFinite(paymentsPerMonth) && paymentsPerMonth < 31) {
//         const averageDaysOfMonth = 30.4167;
//         let savings = 0,
//             days = averageDaysOfMonth / paymentsPerMonth,
//             temp = 0,
//             payments = salary / paymentsPerMonth,
//             expenses = monthlyExpenses / paymentsPerMonth;

//         if (payments < expenses) return 'Неможливо cтільки витрачати';
//         if (goal < payments) return 'Купуйте з першої виплати';

//         while (temp < goal) {
//             console.log(savings, temp);
//             days += 30.4167 / paymentsPerMonth;
//             savings += payments - expenses;
//             temp = savings + payments;
//         }
//         return `Потрібно ${Math.ceil(days)} днів`;

//     } else return 'Невірні дані';

// }

// console.log(calcTimeToSavings(3333, 8000, 1750, 1));



// Задание 17

// function calcNegativeNumbers() {
//     let res = 0;
//     for (let i = 0; i < 3; i++) {
//         let num = +prompt('Введите число (по одному числу в каждое диалоговое окно)');
//         if (isNaN(num)) {
//             i = i-1;
//         } else if (num < 0) res += num;
//     }
//     return res;
// }

// console.log(calcNegativeNumbers());

