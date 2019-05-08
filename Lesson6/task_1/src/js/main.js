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


let inputs = document.getElementsByTagName('input'),
  startBtn = document.querySelector('#start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthsavingsValue = document.querySelector('.monthsavings-value'),
  yearsavingsValue = document.querySelector('.yearsavings-value'),
  expensesItemInput = document.querySelectorAll('input.expenses-item'),
  expensesBtn = document.querySelectorAll('button')[0],
  optExpensesBtn = document.querySelectorAll('button')[1],
  countBtn = document.querySelectorAll('button')[2],
  optExpensesInput = document.querySelectorAll('.optionalexpenses-item'),
  incomeInput = document.querySelector('#income'),
  checkboxInput = document.querySelector('input[type="checkbox"]'),
  sumInput = document.querySelector('#sum'),
  percentInput = document.querySelector('#percent'),
  yearInput = document.querySelector('.year-value'),
  monthInput = document.querySelector('.month-value'),
  dayInput = document.querySelector('.day-value');

  /* expensesBtn.disabled = true;
  optExpensesBtn.disabled = true;
  countBtn.disabled = true; */

let money, time;

  startBtn.addEventListener("click", function () {
  while(time == "" || time == null) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
  }
  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed(2);
  yearInput.value = new Date(Date.parse(time)).getFullYear();
  monthInput.value = new Date(Date.parse(time)).getMonth() + 1;
  dayInput.value = new Date(Date.parse(time)).getDate();
  startBtn.disabled = true;
  startBtn.style.backgroundImage = "none";
});

// Обязательные расходы
expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItemInput.length; i++) {
    let a, b;
    a = expensesItemInput[i].value;
    b = expensesItemInput[++i].value;
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && isNaN(b) == false && b >= 0 && a != '' && b != '' && a.length < 50) {
      expensesBtn.disabled = false;
      // expensesBtn.style.backgroundImage = 'linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#ffffff, #ffffff)';
      appData.expenses[a] = b;
      sum += +b;
    } else {
      expensesBtn.style.backgroundImage = "none";
      alert("Название статьи расходов не должно быть пустым или быть больше 50 символов, а числовое значение суммы расходов должно быть больше 0");
      --i;
    }
  }
  expensesValue.textContent = sum.toFixed(2);
});

expensesItemInput.forEach(function (item, i, array) {
  item.addEventListener('input', function () {
      if ((array[0].value != "" && array[1].value != "") &&
          (array[2].value != "" && array[3].value != "")) {
            expensesBtn.style.backgroundImage =
              "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
              expensesBtn.disabled = false;
              countBtn.style.backgroundImage =
              "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
              countBtn.disabled = false;
      } else {
        expensesBtn.disabled = true;
        expensesBtn.style.backgroundImage = "none";
        countBtn.disabled = true;
        countBtn.style.backgroundImage = "none";
      }
  });
});

optExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optExpensesInput.length; i++) {
    let opt = optExpensesInput[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed(2);
    dayBudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 600) {
      levelValue.textContent = "Уровень достатка меньше минимума";
    } else if (appData.moneyPerDay >= 600 && appData.moneyPerDay < 1000) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay >= 2000) {
      levelValue.textContent = "Высокий уровень достатка ";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

incomeInput.addEventListener ('input', function() {
  let items = incomeInput.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

checkboxInput.addEventListener ('click', function() {
  if (appData.savings == false) {
    appData.savings = true;
    sumInput.disabled = false;
    percentInput.disabled = false;
  } else {
    appData.savings = false;
    sumInput.disabled = true;
    percentInput.disabled = true;
  }
});

sumInput.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = sumInput.value,
        percent = percentInput.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;
    monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearsavingsValue.textContent.textContent = appData.yearIncome.toFixed(2);
  }
});

percentInput.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = sumInput.value,
        percent = percentInput.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
    monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(2);
  }
});

let  appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
  };
