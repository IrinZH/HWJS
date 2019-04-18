let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

let objectOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце");
let cost = prompt("Во сколько обойдется?");

appData.expenses[objectOfExpenditure] = cost;


console.log(appData);



console.log('бюджет на 1 день '+ +money/30 + ' рублей');