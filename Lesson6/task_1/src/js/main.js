'use strict';

// тестирование запушить
//cd HWJS
//git add .
// git commit -m "комментарий"
//git push



let startBtn = document.querySelector('#start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthsavingsValue = document.querySelector('.monthsavings-value'),
  yearsavingsValue = document.querySelector('.yearsavings-value'),
  expensesItemInput = document.querySelectorAll('.expenses-item'),
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

  expensesBtn.disabled = true;
  expensesBtn.style.backgroundImage = "none";
  optExpensesBtn.disabled = true;
  optExpensesBtn.style.backgroundImage = "none";
  countBtn.disabled = true;
  countBtn.style.backgroundImage = "none";

  // отключаем все инпуты
let elem, 
    inputs = document.getElementsByTagName('input');
    for (elem of inputs) {
      elem.disabled = true;
  }
  
  
  //стартовая кнопка начать расчет
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
  for (elem of inputs){
    elem.disabled = false;
  }
});

// Обязательные расходы
expensesItemInput.forEach(function (item, i, array) {
  item.addEventListener('input', function () {
      if ((array[0].value != "" && array[1].value != "") || (array[2].value != "" && array[3].value != "")) {
            expensesBtn.style.backgroundImage =
              "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
              expensesBtn.disabled = false;
              countBtn.style.backgroundImage =
              "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
              countBtn.disabled = false;
      } 
      if ((array[0].value == "" && array[1].value != "" && array[2].value != "" && array[3].value != "") || (array[0].value != "" && array[1].value == ""  && array[2].value != "" && array[3].value != "") || (array[0].value != "" && array[1].value != ""  && array[2].value == "" && array[3].value != "") || (array[0].value != "" && array[1].value != ""  && array[2].value != "" && array[3].value == "")) {
      
          expensesBtn.disabled = true;
          expensesBtn.style.backgroundImage = "none";
          countBtn.disabled = true;
          countBtn.style.backgroundImage = "none";
        }  
      });
});

expensesBtn.addEventListener('click', function() {
  expensesValue.textContent = '';
  let sum = 0;

  for (let i = 0; i < expensesItemInput.length; i++) {
    let a = expensesItemInput[i].value,
      b = expensesItemInput[++i].value;
    
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && isNaN(b) == false && b >= 0 && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } 
  }
  expensesValue.textContent = sum;
});

// не обязательные расходы
optExpensesInput.forEach(function (item, i, array) {
  item.addEventListener('input', function () {
  // кнопка активная, если заполнено хотя бы одно любое поле
        if (array[0].value != "" || array[1].value != "" ||
        array[2].value != "") {
        optExpensesBtn.style.backgroundImage = "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
          optExpensesBtn.disabled = false;
      } 
      if (array[0].value == "" && array[1].value == "" &&
      array[2].value == "") {
        optionalExpensesValue.textContent = ''; //если все инпуты не обязательных обнулили обнуляем и в поле возможные траты
        optExpensesBtn.disabled = true;
        optExpensesBtn.style.backgroundImage = "none";
      }
    });
});
optExpensesBtn.addEventListener('click', function() {
  optionalExpensesValue.textContent = ""; //обнуляем на случай повторного нажатия кнопки
  for (let i = 0; i < optExpensesInput.length; i++) {
    if (optExpensesInput[i] != null) {
      optExpensesBtn.disabled = false;
      optExpensesBtn.style.backgroundImage = "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
    let opt = optExpensesInput[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
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
