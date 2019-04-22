'use strict';
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"],
    today = week[new Date().getDay()],
    //текущий день недели, правильно показывает если неделя с воскресенья))
    item;

week.forEach(function(item) {
  let span = document.createElement('span');
      span.textContent = item;
  if (item == "Sunday" || item == "Saturday") {
      span.classList.add("bold");
  }
  if (item == today) {
      span.classList.add("italic");
  }
  document.body.appendChild(span); // выводим на экран
  });  
  
//предыдущий вариант с for
/* for (let i = 0; i < week.length; i++) {
    let span = document.createElement('span');
        span.textContent = (week[i]);
    if (week[i] == "Sunday" || week[i] == "Saturday") {
        span.classList.add("bold");  
    }
    if (week[i] == today) {
        span.classList.add("italic");
    }
    document.body.appendChild(span);
  }
 */

  let array = ['195584', '43000545', '03546582', '771125', '15227', '3751236', '72585999'];
  array.forEach((e) => {
    if (e[0] == '3' || e[0] == '7') {
      console.log("число начинается с 3 или с 7 :\n" + e);
    }
  });


