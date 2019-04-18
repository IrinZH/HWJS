'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let  appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let objectOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", ""),
    cost = prompt("Во сколько обойдется?", "");

appData.expenses[objectOfExpenditure] = cost;

console.log("бюджет на 1 день "+ +money/30 + " руб.");

//console.log(appData); 
// проверяем как записался в объект объект expenses с данными статьи расходов и стоимости
// console.log(typeof(objectOfExpenditure));
// статья расходов выводится без "", но все равно строка