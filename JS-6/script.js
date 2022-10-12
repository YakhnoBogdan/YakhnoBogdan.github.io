// Задание 1
const calendar = document.querySelector('.calendar');

function createCalendar(elem, year, month) {

    let mon = month - 1; 
    let d = new Date(year, mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }
createCalendar(calendar, 2012, 9);

   const tableElement = document.querySelector('table');
    Array.from(tableElement.querySelectorAll('td, th')).forEach(item => {
        item.style.border = '1px solid black';
    })

let dat = new Date(2012, 9, 15);


// Задание 2

// function showNotification({top, right, className, html}) {
//     let notification = document.createElement('div');

//     notification.style.top = top + 'px';
//     notification.style.right = right + 'px';
//     notification.style.position = 'absolute';

//     className ? notification.classList = `${className} notification`
//         : notification.className = 'notification';

//     notification.innerHTML = html;
//     document.body.append(notification);
    
//     setTimeout(() => notification.remove(), 1500);
// }
// let options = {
//     top: 10,
//     right: 10, 
//     html: "Hello!", 
//     className: "welcome"
// }
// showNotification(options);

// Задание 7

// button.addEventListener("click" , () => alert ( "1" ));
// button.removeEventListener("click" , () => alert ( "1" ));
// button.onclick = () => alert ( 2 );

// Виведуться послідовно два обровника, тому що removeEventListener не видалить перший обровник (не та ж сама функція),
// та другий обробник не перезапише вже існуючий, тому що записується через onclick

// Задание 11

// const select = document.querySelector('#genres');

// let selectedOption = select.options[select.selectedIndex];
// console.log(selectedOption.value, selectedOption.innerText);

// let newOption = new Option('Джаз', 'jazz');
// select.appendChild(newOption);
// newOption.selected = true;

