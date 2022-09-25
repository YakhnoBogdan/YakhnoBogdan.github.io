// Задание 1

// let i = 3;
// while (i) {
// alert(i--);
// }
// Последнее выведенное значение будет 1, так как постфиксная форма декремента сначала возвращает значение,
// следовательно при выводе значения 1 следующим действием измениться значение на 0 - false условие.

// Задание 2

// let A = 3, B = 4, C = 5;
// if (A < B && B < C) {
//     A *= 2;
//     B *= 2;
//     C *= 2;
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
// }
// console.log(A, B, C);

// Задание 3

// let A = 13, B = 1, C = 5;

// if (A < B && B < C || A > B && B > C) {
//     A *= 2;
//     B *= 2;
//     C *= 2;
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
// }
// console.log(A,B,C);

// Задание 4

// let A = 3, B = -21, C = 15;

// Math.abs(B - A) < Math.abs(C - A) ? console.log(B, Math.abs(B-A)) 
// : console.log(C, Math.abs(C - A));

// Задание 5

// let x = 0, y = 3;
// if (x == 0 && y == 0) {
//     console.log(0);
// } else if (x == 0 && y != 0 || x != 0 && y == 0) {
//     console.log(1);
// } else {
//     console.log(3);
// }

// Задание 6

// let x = -2, y = -5;
// if (x > 0) {
//     if (y > 0) {
//         console.log('I');
//     } else {
//         console.log('II');
//     }
// } else {
//     if (y < 0) {
//         console.log('III');
//     } else {
//         console.log('IV');
//     }
// }

// Задание 7

// function getLastRectanglePoint(coords) {
//     let arr = coords.map(item => [item.x, item.y]).flat();
//     let result = [...new Set(arr)].filter(item => {
//         return arr.indexOf(item) == arr.lastIndexOf(item);
//     });
//     return result.join(' ');
// }

// let coordinates = [{ x: 2, y: 4, }, { x: 20, y: 4, }, { x: 20, y: 14, }];

// console.log(getLastRectanglePoint(coordinates));

// Задание 8 

// function getDaysOfYear(year) {
//     let days = 365;
//     if (year % 4 == 0) {
//         if (year % 100 == 0 && year % 400 != 0) {
//             return days;
//         } else {
//             days = 366;
//         }
//     }
//     return days;
// }
// console.log(getDaysOfYear(1900));

// Задание 9 

// let num = -190;
// if (num > 0) {
//     if (num % 2 == 0) {
//         console.log('Позитивне парне число');
//     } else {
//         console.log('Позитивне непарне число');
//     }
// } else if (num < 0) {
//     if (num % 2 == 0) {
//         console.log('Негативне парне число');
//     } else {
//         console.log('Негативне непарне число');
//     }
// } else console.log('Нульове число');

// Задание 10 
// let num = 7678;

// if (num > 0 && num < 10) {
//     if (num % 2 == 0) {
//         console.log('Однозначне парне число');
//     } else {
//         console.log('Однозначне непарне число');
//     }
// } else if (num > 9 && num < 100) {
//     if (num % 2 == 0) {
//         console.log('Двозначне парне число');
//     } else {
//         console.log('Двозначне непарне число');
//     }
// } else if (num > 99 && num < 1000) {
//     if (num % 2 == 0) {
//         console.log('Трьохзначне парне число');
//     } else {
//         console.log('Трьохзначне непарне число');
//     }
// } else if (num > 999 && num < 10000) {
//     if (num % 2 == 0) {
//         console.log('Чоторьохзначне парне число');
//     } else {
//         console.log('Чоторьохзначне непарне число');
//     }
// }

// Задание 11

// let i = 0;
// while (++i < 5) alert(i);

// Выведется 1 --> 2 --> 3 --> 4 , так как префиксный инрекмент сразу возвращает увеличенное значение
// Следовательно вывод начнется с единицы и закончится на 4, после которой следует проверка ++4(5) < 5 не истина

// let i = 0;
// while (i++ < 5) alert(i);

// Выведется 1 --> 2 --> 3 --> 4 --> 5. Постфиксный инкремент для сравнения с 5-ой будет давать предыдущее
// значение переменной i и после увеличивать его (увеличенное значение попападет в алерт).


// Задание 12

// for (let i = 0; i < 5; i++) alert(i);
// for (let i = 0; i < 5; ++i) alert(i);
// Выведет 0 --> 1 --> 2 --> 3 --> 4 в обоих случаях. Цикл for сначала проверяет входное значение переменной i, 
// и после сразу выполняет тело цикла. Уже затем происходит инкрементирование и новое значение переменной переходит
// на следующий шаг цикла

// Задание 13

// for (let i = 2; i<=10; i+=2) {
//     console.log(i);
// }

// Задание 14

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

// Задание 15 

// let num;
// do {
//     num = +prompt('Введите число больше 100');
// } while (num != 0 && num < 100);

// Задание 16


// function outputPrimeNumbers(start, end) {

//     for (let i = start; i <= end; i++) {
//         for (let j = start; j <= i; j++) {
//             if (i % j === 0 && j < i) {
//                 break;
//             } else if (j === i) {
//                 console.log(i);
//             }
//         }
//     }
// }

// outputPrimeNumbers(2, 10);

// Задание 17


// function simpleAverage() {
//     let firstNum = +prompt('Введите первое число');
//     let secondNum = +prompt('Введите второе число');

//     if (isFinite(firstNum) && isFinite(secondNum)) {
//         alert(`Среднее арифметическое ${(firstNum + secondNum) / 2}`);
//     } else {
//         simpleAverage();
//     }
// }

// simpleAverage();

// Задание 18

// function numberSquare() {
//     let num = +prompt('Введите число');
//     if (isFinite(num)) {
//         alert(`Квадрат числа: ${num * num}`)
//     } else {
//         numberSquare();
//     }
// }
// numberSquare();

// Задание 19

// let a = +prompt('Введите 1-ое число'),
// b = +prompt('Введите 2-ое число'),
// c = +prompt('Введите 3-ое число');

// alert(Math.max(a,b,c) - Math.min(a,b,c));

// Задание 20

// let num = +prompt('Введите число');
// if (num % 2 == 0) {
//     console.log('Число парне');
// } else console.log('Число непарне');

// Задание 21

// function sumOfDigits(num) {
//     let digitsCount, digitsSum, temp = 0, lenTemp;
//     if (isFinite(num)) {
//         lenTemp = num.toString();
//         digitsCount = lenTemp.length;
//         digitsSum = lenTemp.split('').reduce((acc, el) => {
//             return acc += +el;
//         }, 0)
//     }
//     console.log(digitsCount, digitsSum);
// }
// let a = 15
// sumOfDigits(a);

// Задание 22 

// const inputSm = document.querySelector('#sm-input');
// const inputDm = document.querySelector('#dm-input');

// inputSm.oninput = () => inputDm.value = inputSm.value * 2.54;
// inputDm.oninput = () => inputSm.value = inputDm.value / 2.54;

// Задание 23 Миллионер

// function millionerGame() {
//     let quests = [
//         {
//             question: 'В каком году началась волынская резня \n A: 1943  B: Что? \n C: 1957  D: 1923',
//             A: 1943, B: 'Что?', C: 1957, D: 1923,
//         },
//         {
//             question: 'Сколько каррат в чистом золоте \n A: 999  B: 24 \n C: 115  D: 37',
//             A: 999, B: 24, C: 115, D: 37,
//         },
//         {
//             question: 'Самая горячая планета Солнечной системы \n A: Венера  B: Юпитер \n C: Марс  D: Сатурн',
//             A: 'Венера', B: 'Юпитер', C: 'Марс', D: 'Сатурн',
//         },
//     ]
//     let answerKey = ['A', 'B', 'A'];
//     for (let i = 0; i < quests.length;) {
//         let ask = prompt(quests[i].question);
//         if (ask == answerKey[i] || ask == answerKey[i].toLowerCase()) {
//             if (i == quests.length - 1) {
//                 alert('Поздравляем, вы одержали победу и выиграли миллион');
//                 i++;
//             } else {
//                 alert(`Верный ответ, вы достигли ${(i + 1) * 1000} грн`);
//                 i++;
//             }
//         } else if (ask == null || ask == '') i = quests.length;
//         else {
//             let gameOver = confirm('Вы проиграли \n Желаете начать заново?');
//             gameOver ? i = 0 : i = quests.length;
//         }
//     }
// }
// millionerGame();



// Задание 24

// function threeDigitNumber(num) {

//     if (isFinite(num)) {
//     let splited = num.toString().split('');

//         if (num % 2) {
//             return splited.reduce((acc, item) => acc *= +item, 1);
//         } else {    
//             return splited.reduce((acc, item) => acc += +item, 0);
//         }
//     }
// }

// alert(threeDigitNumber(+prompt('Ввведите трехзначное число')));

// Задание 25

// function checkTriangelsSides(aSide, bSide, cSide) {
//     if (isFinite(aSide) && isFinite(bSide) && isFinite(cSide)) {
//         return aSide < bSide + cSide && bSide < aSide + cSide && cSide < aSide + bSide ? true : false;
//     } else {
//         return 'Введите 3 числовых значения длины сторон треугольника';
//     }
// }

// let a = +prompt('Введите длину первой стороны');
// let b = +prompt('Введите длину второй стороны');
// let c = +prompt('Введите длину третьей стороны');

// console.log(checkTriangelsSides(a, b, c));

// Задание 26

// function checkPointInCircle(R, x, y) {
//     return x**2 + y**2 <= R**2 ? console.log('Внутри круга') : console.log('За пределами круга');;
// }
// let R = 10, x = 4, y = 9;
// checkPointInCircle(R, x, y);

// Задание 27

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// Задание 28

// const user = {
//     name: "John"
// };
// user.name = "Pete";
// Это будет работать, так как в сылочных типах данных const 
// предотвращает переприсвоение самой переменной объекта, а не его содержимого

// Задание 29

// let sum = 0;
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// for (let el in salaries) {
//     sum += salaries[el];
// }
// console.log(sum);

// Задание 30

// function multiplyNumeric(obj) { 
//     for (const i in obj) {
//         if(typeof obj[i] === 'number' && !isNaN(obj[i])) {
//             obj[i] *= 2;
//         }   
//     }
// }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     Kate: 'Kate',
// }
// console.log(salaries);