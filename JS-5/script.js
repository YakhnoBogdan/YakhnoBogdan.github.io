// Задание 1

// let div = document.body.firstElementChild;
// let ul = document.querySelector('ul');
// let li = ul.lastElementChild;

// Задание 2

// Правда, що elem.lastChild.nextSibling завжди дорівнює null ? --
// --> Так, lastChild повертає останній обʼєкт вузла elem
// Правда, що elem.children[0].previousSibling завжди дорівнює null? --
// --> Ні, перед першим елементом можуть ще буду текстові вузли або коментарі

// Задание 3

// function createNumeredTable() {
//     let table = document.createElement('table');
//     document.body.appendChild(table);
//     for (let i = 1; i < 6; i++) {
//         let row = document.createElement('tr');
//         table.appendChild(row);
//         for (let j = 1; j < 6; j++) {
//             let td = document.createElement('td');
//             row.appendChild(td);
//             td.innerText = `${i} : ${j}`;
//             td.style.padding = '5px';
//             td.style.border = '1px solid black';
//             if (i == j) {
//                 td.style.backgroundColor = 'red';
//             }
//         }
//     }
// }

// createNumeredTable();

// Задание 4

// const table = document.querySelector('#age-table');
// const labels = table.querySelectorAll('label');
// const firstTd = table.querySelector('td');
// const searchForm = document.forms.search;
// const firstInput = searchForm[0];
// const lastInput = searchForm[searchForm.length-1];

// Задание 5 

// let ul = document.querySelector('#task-5');
// let liItems = ul.querySelectorAll('li');
// for (const i of liItems) {
//     console.log(i);    
// }
// 1. В кожному з елементів відображається елемент повністю з його піддеревом
// 2. Кількість нащадків у li елемента = li.querySelectorAll('*').lenght;


// Задание 6

// alert(document.body.lastChild.nodeType);  // Виведе 1 тому що scriptElement - Element node

// Задание 7 

// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert( body.firstChild.data ); // Вміст коментаря, що містить в собі імʼя тегу BODY

// Задание 8

// 1. Об'єктом якого класу є document?  --> HTMLDocument
// 2. Яке місце він посідає у DOM-ієрархії?  --> Він знаходиться  та після Node
// 3. Чи успадковує він від Node чи від Element, чи може від HTMLElement? --> Успадковує від Node та EventTarget

// Задание 9 

// let elem9 = document.querySelector('#elem-9');
// function clear(elem) {
//     elem.innerHTML = '';
// }

// clear(elem9);

// Задание 10

// console.log(table10);// таблиця, як і має бути
// table10.remove(); // Чому в документі залишився текст "ааа"?
// Тому що бразуер автоматично вставляє tbody для table та вузли які не відносяться до елементів таблиці випадають за межі table

// Задание 11

// function fillTheList() {
//     let ul = document.createElement('ul'), content, li;
//     do {
//         content = prompt('Введіть зміст елементу');
//         if (content) {
//             content = content.replace(/<[^>]+>/g, '');
//             console.log(content);
//             li = document.createElement('li');
//             li.innerText = content;
//             ul.appendChild(li);
//         }
//     } while (content != null && content != '');
//     document.body.appendChild(ul);
// }
// fillTheList();

// Задание 12

// function insertLiItems(startInsert) {

//     for (let i = 2; i < 6; i++) {
//         let liItem = document.createElement('li');
//         liItem.innerText = i;
//         startInsert.after(liItem);
//         startInsert = liItem;
//     }
// }

// const startItem = document.querySelector('#one');
// insertLiItems(startItem);
