'use strict';

/* 
Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'

2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)

3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)

4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

·        На странице создайте интерфейс для её отображения: как минимум - 3 input’a: для двух ввода дат и вывода результата.

5) Проверить, чтобы все работало и не было ошибок в консоли

6) Добавить папку с усложненным заданием в свой репозиторий на GitHub

*/
let data = new Date(),
    year = data.getFullYear(),
    month = data.getMonth(),
    day = data.getDate(),
    hour = data.getHours(),
    minutes = data.getMinutes(),
    seconds = data.getSeconds(),
    week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
    "Суббота"],
    today = week[new Date().getDay()],

    dates = document.querySelectorAll('input'),
    day1 = dates[0].valueAsDate,
    day2 = dates[1].valueAsDate;
     
function addZero(num){
if (String(num).length == 1) {num = '0' + num;}
return num;
};

function weekDay(day) {
  document.getElementById('today').innerHTML = today;
}
weekDay(day);

console.log(addZero(hour) + ":"+ addZero(minutes) + ":" + addZero(seconds) + " " + addZero(day) + "." + addZero(month+1) + "." + year);
document.getElementById('now').innerHTML = addZero(hour) + ":"+ addZero(minutes) + ":" + addZero(seconds) + " " + addZero(day) + "." + addZero(month+1) + "." + year;

function countDays(x, y) {
  return Math.abs((y - x) / (1000*60*60*24));
  //Math.abs() возвращает абсолютное значение числа
  //(1000*60*60*24)) перевод миллисекунд в дни
}

dates[0].addEventListener('change', () => {
    day1 = dates[0].valueAsDate;
    if (day1 != null && day2 != null) {
      dates[2].value = countDays(day1, day2);
    }
    if (day1 === null || day2 === null) {
      dates[2].value = null;
    }
    if (day1 === null && day2 === null) {
      dates[2].value = null;
    }
});

dates[1].addEventListener('change', () => {
    day2 = dates[1].valueAsDate;
    if (day1 != null && day2 != null) {
      dates[2].value = countDays(day1, day2);
      }
    if (day1 === null || day2 === null) {
      dates[2].value = null;
    }
    if (day1 === null && day2 === null) {
      dates[2].value = null;
    }
});








