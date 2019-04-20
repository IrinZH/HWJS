'use strict';

let today = new Date(),
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"],
    todayWeekDay = week[today.getDay()]; //текущий день недели, правильно показывает если неделя с воскресенья))

for (let i = 0; i < week.length; i++) {
    let p = document.createElement('p'),
        text = document.createTextNode(week[i]);
        p.appendChild(text);
        document.body.appendChild(p);
    if (week[i] == "Sunday" || week[i] == "Saturday") {
        p.setAttribute("class", "bold");
    }
    if (week[i] == todayWeekDay) {
        p.classList.add("italic");
    }
    else {
    }
  }

  let array = ['195584', '43000545', '03546582', '771125', '3522777', '3751236', '12585999'];

  array.forEach((e) => {
    if (e[0] == '3' || e[0] == '7') {
      console.log("числа начинающиеся с 3 и с 7 :" + e);
    }
    else {
      console.log("ошибка - что то пошло не так");
    }
  });


