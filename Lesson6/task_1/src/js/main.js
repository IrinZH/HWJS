'use strict';

// тестирование запушить
//cd HWJS
//git add .
// git commit -m "комментарий"
//git push


/*
1) Добавить весь функционал, повторяя за видео

2) Если программа еще не запущена( не нажали кнопку "Начать расчет") или нужное(соответственное) для заполнения поле пустое - сделать кнопки неактивными. (Например, если ни одно поле обязательных расходов не заполнено - блокируем кнопку "Утвердить")

3) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub

6) Ознакомиться с объектом Date

*/

/*
ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ:
1) Сделать так, чтобы в поля "необязательные расходы" можно было использовать только русские буквы

·        Ничего кроме букв ввести нельзя.

·        При повторном нажатии на кнопку “Утвердить” - необязательные расходы перезаписываются заново

2) Сделать так, чтобы в разделе "Введите обязательные расходы" в поля с ценами можно было вводить только цифры.


3) Стилизовать проект на свой вкус (оставляем функционал - внешний вид меняем как хотим и чем хотим. P.S. Не нужно извращаться и менять все через JS)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с усложненным заданием в свой репозиторий на GitHub
*/


let start = document.querySelector('#start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthsavingsValue = document.querySelector('.monthsavings-value'),
  yearsavingsValue = document.querySelector('.yearsavings-value'),
  expensesItemInput = document.querySelectorAll('input.expenses-item'),
  [btn1, btn2, btn3] = document.querySelectorAll('button'),
  optExpensesInput = document.querySelectorAll('.optionalexpenses-item'),
  incomeInput = document.querySelector('#income'),
  checkboxInput = document.querySelector('input[type="checkbox"]'),
  sumInput = document.querySelector('#sum'),
  percentInput = document.querySelector('#percent'),
  yearInput = document.querySelector('.year-value'),
  monthInput = document.querySelector('.month-value'),
  dayInput = document.querySelector('.day-value');
  
console.log(start);
console.log(budgetValue);
console.log(dayBudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalExpensesValue);
console.log(incomeValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);
console.log(expensesItemInput);
console.log([btn1, btn2, btn3]);
console.log(optExpensesInput);
console.log(incomeInput);
console.log(checkboxInput);
console.log(sumInput);
console.log(percentInput);
console.log(yearInput);
console.log(monthInput);
console.log(dayInput);




