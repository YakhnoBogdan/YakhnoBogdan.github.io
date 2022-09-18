// 1 Задание

// let myName = 'Bogdan', admin;
// admin =  myName;
// console.log(admin);

// 2 Задание


// 3 Задание

// let name = "Ilya";
// alert(`hello ${1}`);  // hello 1
// alert(`hello ${"name"}`); // hello name
// alert (`hello ${name}`); // hello Ilya

// 4 Задание 

"" + 1 + 0  // "10"
"" - 1 + 0 // 
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
" – 9 " + 5 // -95
" – 9 " - 5 // NaN
null + 1 //  1
undefined + 1 // NaN

// 5 Задание 

// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// 6 Задание

// let a = 2;
// let x = 1 + (a *= 2 ); // 5


// 7 Задание

// 5 > 4 // true
// "ананас" > "яблуко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n " // false

// 8 Задание 

// let userName = prompt("Enter your name");
// alert(userName);

// 9 Задание

// if ("0") {
//     alert(' Привіт');
// } // Выведется "Привiт" так как "0" не пустая строка (не falsy значение)

// 10 Задание

// let legalName = prompt('Яка офіційна назва JavaScript ?');
// if (legalName == 'ECMAScript') {
//     console.log('Правильно');
// } else {
//     console.log('«Не знаєте? ECMAScript!»');
// }

// 11 Задание

// let num = prompt('Введите число');
// if (+num > 0) {
//     console.log(1);
// } else if (+num < 0) {
//     console.log(-1);
// } else if (+num == 0) {
//     console.log(0);
// }

// 12 Задание

// let result = a + b < 4 ? 'Мало' : 'Багато';

// 13 Задание

// let message = login == 'Співробітник' ? 'Привiт'
//     : login == 'Директор' ? 'Добрий день'
//         : login == '' ? 'Відсутній логін' : '';

// 14 Задание

// alert( null || 2 || undefined ); // 2 (Первое truthy значение)

// 15 Задание

// alert(alert (1) || 2 || alert(3)) // Сработает первый алерт (1) а после выведет truthy 2

// 16 Задание

// alert(1 && null && 2); // null - первое false значение

// 17 Задание

// alert(alert(1) && alert(2)); // Сработает первый вложенный алерт(1) и после результат выражения undefined
// так как функция alert ничего не возвращает 

// 18 Задание

// alert(null || 2 && 3 || 4 ); // Выведет 3, первое truthy значение

// 19 Задание

// if (age >= 14 && age <= 90) {
// }

// 20 Задание

// if (!(age>=14 && age <=90)) {
// }

// if (age>=14 && age <=90) {
// }

// 21 Задание

// if (-1 || 0) alert( 'first');
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert('third' );
// Выражения 1 и 3 возвращают truthy значения -1 и 1 соответсвенно

// 22 Задание

// let login = prompt('Введите логин'), password;

// if (login == 'Адмін') {
//     password = prompt('Введіть пароль');
//     if (password == 'я головний') {
//         console.log('Здравствуйте');
//     } else if (password == null) {
//         console.log('Скасовано');
//     } else {
//         console.log('Невірний пароль');
//     }
// } else if (login == null) {
//     console.log('Скасовано');
// } else {
//     console.log('Я вас не знаю');
// }

// 23 Задание

// if (browser === 'Edge') {
//     alert(" You've got the Edge! ");
// } else if (browser === 'Chrome' || browser === 'Firefox'
//     || browser === 'Safari' || browser === 'Opera') {
//     alert(' Okay we support these browsers too');
// } else {
//     alert(' We hope that this page looks ok!');
// }

// 24 Задание

// let a = +prompt('a?', '');

// switch (a) {
//     case 0:
//         console.log(0);
//         break;
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//     case 3:
//         console.log('2,3');
//         break;
// }

// 25 Задание

// let num = 5;
// num = num > 0 ? num + 1 : num;
// console.log(num);

// 26 Задание

// let num = -5;
// num = num > 0 ? num + 1 : num - 2;
// console.log(num);

// 27 Задание

// let num = 0;
// num = num > 0 ? num +1 : num < 0 ? num -2 : num == 0 ? num = 10 : num;
// console.log(num);

// 28 Задание

// let a = 3, b = 2, c = 5, countPositive = 0;
// if (a > 0 && b > 0 && c > 0) {
//     countPositive += 3;
// } else if (a > 0 && b > 0 || b > 0 && c > 0 || a > 0 && c > 0) {
//     countPositive += 2;
// } else if (a > 0 || b > 0 || c > 0) {
//     countPositive++;
// }
// console.log(countPositive);

// 29 Задание

// let a = 2, b = -14, c = 12, countPositive = 0, countNegative = 0;

// if (a > 0 && b > 0 && c > 0) {
//     countPositive += 3;
// } else if (a > 0 && b > 0 && c < 0 || b > 0 && c > 0 && a < 0 || a > 0 && c > 0 && b < 0) {
//     countPositive += 2;
//     countNegative += 1;
// } else if (a > 0 && b < 0 && c < 0 || b > 0 && a < 0 && c < 0 || c > 0 && a < 0 && b < 0) {
//     countPositive++;
//     countNegative += 2;
// } else if (a < 0 && b < 0 && c < 0){
//     countNegative += 3;
// }
// console.log(`Positive: ${countPositive}, Negative: ${countNegative}`);


// 30 Задание

// let a = 5, b = 7;
// console.log(a > b ? a : b);

// 31 Задание

// let a = 5, b = 7;
// console.log(a < b ? a : b);

// 32 Задание

// let a = 5, b = 7;

// if (a > b) {
//     console.log(a);
//     console.log(b);
// } else {
//     console.log(b);
//     console.log(a);
// }

// 33 Задание

// let A = 5, B = 7, temp = A;
// if (A !== B) {
//     A = B;
//     B = temp;
//     console.log(A, B);
// }

// 34 Задание

// let A = 5, B = 7;

// if (A != B) {
//     A = B = A + B;
//     console.log(A, B);
// } else {
//     A = B = 0;
//     console.log(A, B);
// }

// 35 Задание

// let A = 5, B = 12, temp = A;
// if (A != B) {
//     A = A > B ? A : B;
//     B = A;
//     console.log(A, B);
// } else {
//     A = B = 0;
//     console.log(A, B);
// }

// 36 Задание

// let a = 3, b = -5, c = 12, minNum;

// minNum = a < b && a < c ? a
//     : b < a && b < c ? b
//         : c;
// console.log(minNum);

// 37 Задание

// let a = 33, b = -5, c = 12, midNum;

// midNum = a < b && a > c || a > b && a < c ? a
// : b < a && b > c || b > a && b < c ? b
// : c < a && c > b || c > a && c < a ? c : 'none of this numbers';
// console.log(midNum);

// 38 Задание

// let a = 33, b = -5, c = 12, result;

// result = a < b && a < c && b > c ? console.log(a, b) 
// : a < b && a < c && b < c ? console.log(a, c)
// : b < a && b < c && a > c ? console.log(b, a)
// : b < b && b < c && a < c ? console.log(b, c)
// : c < a && c < b && a > b ? console.log(c, a) 
// : c < a && c < b && a < b ? console.log(c, b) : console.log('none');


// 39 Задание

// let a = 200, b = 200, c = 20, result;

// result = a < b && a < c ? b + c
//     : b < a && b < c ? a + c
//         : c < a && c < b ? a + b : 'none';
// console.log(result);

// 40 Задание 

// let a = 11, b = 10, c = 10, result;

// result = a == b ? c : b == c ? a : b;
// console.log(result);
