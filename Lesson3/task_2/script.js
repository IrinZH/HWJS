'use strict';

//1)
let str = "урок-3-был слишком легким";
str = str.slice(0,1).toUpperCase() + str.slice(1);
// str = str.substring(0,1).toUpperCase() + str.substring(1); или так
console.log('1) ', str);
//2)
str = str.replace(/-/g, ' ');
console.log('2) ', str);
//3)
let str1;
str1 = str.slice(0,(str.lastIndexOf(' ') + 1));
// console.log('3) ', str1);
let str2;
str2 = str.slice(str.lastIndexOf(' ') + 1); // получили легким - часть строки начиная с после последнего пробела
str2 = str2.slice(0,-2) + 'оо';   //отрезали 2 последних символа и прибавили "00"
// str2 = str.slice(str.lastIndexOf(' ') + 1).slice(0,-2) + 'оо'; то же самое в одну строчку
console.log('3) ', str1 + " " + str2);
//4)
let arr = [20, 33, 1, "Человек", 2, 3],
    result = 0;
    arr.forEach(function(item) {
if (typeof item == 'number' && !isNaN(item)){
  result += item**3;
  }
});
result = Math.sqrt(result);
console.log('4) ', result);
//5)
// let text =" 234567890123456789 123456789 123456789 12345678901234";
let text = prompt('введите произвольный текст');

function sliceText(text){
  if (typeof text == 'string'){
      text = text.trim();
      if (text.length > 50) {
        text = text.slice(0, 50) + '...';
      }
  console.log('5) ', text + "\n, тип переменной - " + typeof(text));    
  } else {
    alert("не строка");
  }
}
sliceText(text);
