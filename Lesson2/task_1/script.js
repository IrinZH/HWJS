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

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", (i+1) + "-ая статья обязательных расходов"),
      b = +prompt("Сумма расходов", "");
      if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && isNaN(b) == false && b >= 0 && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      
  } else {

    if (typeof(a) != null || a != '' || a.length < 50)  {
      alert("Название статьи расходов не должно быть пустым или больше 50 символов");
    }
    if (isNaN(b) == true || b <= 0  || typeof(b) != null || b != '') {
      alert("Числовое значение суммы расходов должно быть больше 0");
    }

    let result = confirm("Заполните еще раз данные о расходах?"); {
      if (result == true) {
      --i;
      }
      else {
      console.log("done");
      }
    }
  }    
}

/* let i = 0;
while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", (i+1) + "-ая статья обязательных расходов"),
      b = +prompt("Сумма расходов", "");
      i++;
      if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && isNaN(b) == false && b >= 0 && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      
    } else {
      if (typeof(a) != null || a != '' || a.length < 50)  {
        alert("Название статьи расходов не должно быть пустым или больше 50 символов");
      }
      if (isNaN(b) == true || b <= 0  || typeof(b) != null || b != '') {
        alert("Числовое значение суммы расходов должно быть больше 0");
      }
  
      let result = confirm("Заполните еще раз данные о расходах?"); {
        if (result == true) {
        --i;
        }
        else {
        console.log("done");
        }
      }
  }
}     */

/* let i = 0;
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", (i+1) + "-ая статья обязательных расходов"),
      b = +prompt("Сумма расходов", "");
      i++;
      if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && isNaN(b) == false && b >= 0 && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      
    } else {
      if (typeof(a) != null || a != '' || a.length < 50)  {
        alert("Название статьи расходов не должно быть пустым или больше 50 символов");
      }
      if (isNaN(b) == true || b <= 0  || typeof(b) != null || b != '') {
        alert("Числовое значение суммы расходов должно быть больше 0");
      }
  
      let result = confirm("Заполните еще раз данные о расходах?"); {
        if (result == true) {
        --i;
        }
        else {
        console.log("done");
        }
      }
  }
}
while (i < 2); */

appData.moneyPerDay = +((appData.budget / 30).toFixed(2));
alert("бюджет на 1 день "+ appData.moneyPerDay + " руб.");

console.log(appData);

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




