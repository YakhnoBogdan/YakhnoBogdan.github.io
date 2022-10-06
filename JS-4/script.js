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

// Задание 6 

const calculator = document.querySelector('.calculator');

const options = {
    controlsBoard: calculator.querySelector('.calculator__controls-board'),
    digits: calculator.querySelectorAll('.digit-sign'),
    signs: calculator.querySelectorAll('.calc-sign'),
    outputField: calculator.querySelector('.calculator__output'),
    clearButton: calculator.querySelector('#clear'),
    percentButton: calculator.querySelector('#percent'),
    equalsButton: calculator.querySelector('.equal'),
    comma: calculator.querySelector('.comma'),
    minus: calculator.querySelector('#positive-negative'),
}


class Calculator {
    constructor(options) {
        this.controlsBoard = options.controlsBoard;
        this.outputField = options.outputField;
        this.prevValue = this.outputField.value;
        this.digits = options.digits;
        this.signs = options.signs;
        this.minus = options.minus;
        this.clearButton = options.clearButton;
        this.percentButton = options.percentButton;
        this.equalsButton = options.equalsButton;
        this.comma = options.comma;
        this.controlsBoard.addEventListener('click', this);
        this.controlsBoard.addEventListener('keydown', this);
    }

    clear() {
        this.outputField.value = '0';
        this.prevValue = '';
        this.nextValue = '';
        this.sign = '';
        this.signs.forEach(el => el.classList.remove('black'));
        this.tempValue = '';
    }

    updateOutput(digit) {
        if (this.sign) {
            this.nextValue === '' ?
                this.outputField.value = '' : digit;
            this.outputField.value += digit;
            this.nextValue = this.outputField.value
            this.tempValue = '';
        } else {
            this.outputField.value == '0' ?
                this.outputField.value = '' : digit;
            this.outputField.value += digit;
            this.prevValue = this.outputField.value;
        }
    }

    focusSign(sign) {
        if (this.sign && this.prevValue && this.nextValue) {
            this.outputField.value = this.calculation(this.prevValue, this.nextValue, this.sign);
            this.prevValue = this.outputField.value;
            this.nextValue = '';
        } else if (!this.prevValue) {
            this.prevValue = this.outputField.value;
        }
        this.sign = sign;
    }

    addComma(comma) {
        if (!this.outputField.value.includes(comma)) {
            this.outputField.value += comma;
        }
    }

    addMinus() {
        if (this.outputField.value == '0') return;
        if (this.outputField.value.includes('-')) {
            this.outputField.value = this.outputField.value.split('-')[1];
            this.prevValue ? this.nextValue = this.outputField.value : this.prevValue = this.outputField.value;
        } else {
            this.outputField.value = '-' + this.outputField.value;
            this.prevValue ? this.nextValue = this.outputField.value : this.prevValue = this.outputField.value;
        }
    }

    backspace() {
        this.outputField.value = this.outputField.value.slice(0, this.outputField.value.length - 1);
        this.nextValue ? this.nextValue = this.outputField.value : this.prevValue = this.outputField.value;
    }
    getPercent() {
        if (this.prevValue && this.nextValue && (this.sign == '+' || this.sign == '-')) {
            this.outputField.value = (this.prevValue / 100) * this.nextValue;
            this.nextValue = this.outputField.value;
        } else  {
            this.outputField.value = this.outputField.value / 100;
            this.prevValue ? this.nextValue = this.outputField.value : this.prevValue = this.outputField.value;
        }
    }

    equals() {
        this.signs.forEach(element => element.classList.remove('black'));
        if (this.prevValue && this.nextValue && this.sign && !this.tempValue) {
            this.tempValue = this.nextValue;
            this.outputField.value = this.calculation(this.prevValue, this.nextValue, this.sign);
            this.prevValue = this.outputField.value;
            this.nextValue = '';
        } else if (this.prevValue && this.sign && this.tempValue){
            this.outputField.value = this.calculation(this.prevValue, this.tempValue, this.sign);
            this.prevValue = this.outputField.value;
        } else if (this.prevValue && this.sign) {
            this.outputField.value = this.calculation(this.prevValue, this.prevValue, this.sign);
            this.tempValue = this.prevValue;
        }
    }

    calculation(prevValue, nextValue, sign) {
        switch (sign) {
            case '+':
                if (prevValue.includes('.') && nextValue.includes('.')) {
                    return ((+prevValue) * 10 + (+nextValue) * 10) / 10;
                }
                return (+prevValue) + (+nextValue);
                break;

            case '-':
                if (prevValue.includes('.') && nextValue.includes('.')) {
                    return ((+prevValue) * 10 - (+nextValue) * 10) / 10;
                }
                return (+prevValue) - (+nextValue);
                break;

            case 'x':
                if (prevValue.includes('.') && nextValue.includes('.')) {
                    return ((+prevValue) * 10 * (+nextValue) * 10) / 10;
                }
                return (+prevValue) * (+nextValue);
                break;

            case '/':
                if (prevValue.includes('.') && nextValue.includes('.')) {
                    return (((+prevValue) * 10) / ((+nextValue) * 10)) / 10;
                }
                return (+prevValue) / (+nextValue);
                break;
            default:
                break;
        }
    }

    handleEvent(event) {

        if (event.type == 'click') {
            switch (event.target) {
                case this.clearButton:
                    this.clear();
                    break;
                case this.comma:
                    this.addComma(event.target.innerText);
                    break;
                case this.equalsButton:
                    this.equals();
                    break;
                case this.percentButton:
                    this.getPercent();
                    break;
                case this.minus:
                    this.addMinus();
                    break;
                default:
                    if (event.target.classList.contains('digit-sign')) {
                        this.updateOutput(event.target.innerText);
                    } else if (event.target.classList.contains('calc-sign')) {
                        this.focusSign(event.target.innerText);
                        this.signs.forEach(element => element.classList.remove('black'));
                        event.target.classList.add('black');
                    }
                    break;
            }
        }

        if (event.type == 'keydown') {
            this.equalsButton.focus();
            if ([...this.digits].some(el => el.innerText.includes(event.key))) {
                this.updateOutput(event.key);
            } else if ([...this.signs].some(el => el.innerText.includes(event.key))) {
                this.focusSign(event.key);
                this.signs.forEach(element => {
                    element.classList.remove('black')
                    if (element.innerText == event.key) {
                        element.classList.add('black');
                    }
                });
            } else {
                switch (event.code) {
                    case 'KeyC':
                        this.clear();
                        break;
                    case 'Backspace':
                        this.backspace();
                        break;
                    case 'Period':
                        this.addComma('.');
                        break;

                    default:
                        break;
                }
            }
        }

    }
}

let calc = new Calculator(options);
calc.clear();

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
