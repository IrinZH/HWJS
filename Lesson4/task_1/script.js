'use strict';

let money,
    time;
function start() {
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
      }
    while(time == "" || time == null) {
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
      }
    }
start();

let  appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", (i+1) + "-ая статья обязательных расходов"),
      b = +prompt("Во сколько обойдется?", "");
      if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
      && isNaN(b) == false && b >= 0 && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        alert("Название статьи расходов не должно быть пустым или быть больше 50 символов, а числовое значение суммы расходов должно быть больше 0");
        --i;
      }
    }
  },
  detectDayBudget: function() {
  appData.moneyPerDay = ((appData.budget / 30).toFixed());
  alert("бюджет на 1 день "+ appData.moneyPerDay + " руб.");
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 300) {
      console.log("Уровень достатка меньше минимума");
    } else if (appData.moneyPerDay >= 300 && appData.moneyPerDay < 1000) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
      console.log("Высокий уровень достатка ");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save,
      percent;
      while(isNaN(save) || save == "" || save == null || save < 0) {
        save = +prompt("Какова сумма накоплений?", "");
      }
      while(isNaN(percent) || percent == "" || percent == null || percent < 0) {
        percent = +prompt("Под какой процент?", "");
      }
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
      appData.optionalExpenses[i] = prompt("Какая " + i + "-ая статья необязательных расходов?");
      }
  },
  chooseIncome: function() {
    let items, itemsMore;
    while (items == null || items == '' || typeof(items) != "string") {
    items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    }
    appData.income = items.split(", ");
    while (itemsMore == null || itemsMore == '' || typeof(itemsMore) != "string") {
    itemsMore = prompt("Может что то еще?", "");
    }
    appData.income.push(itemsMore);
    appData.income.sort();
    document.body.innerHTML = "Способы доп. заработка:<br>";
    appData.income.forEach(function(item, i) {
      document.body.innerHTML += (i+1) + " - " + item + "<br>";
      // alert(i+1 + ": " + item);
    });
  }
};
appData.chooseIncome();
// console.log(appData);
console.log("Наша программа включает в себя данные:");
for(let item in appData){
console.log("Свойство: " + item + " = " + appData[item]);  
}

