'use strict';

//1)
let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substring(1); //Метод substring(start, end) возвращает подстроку с позиции start до, но не включая end(тут до конца строки)
console.log('1) ', str);
//2)
str = str.replace(/-/g, ' ');
console.log('2) ', str);
//3)
str = str.replace(/легким/g, '');
console.log('3) ', str);
let str1 = 'легким';
str1 = str1.substr(0, 4) + 'о'; //substr(start [, length]) возвращает подстроку с позиции start, второй аргумент - количество возвращаемых символов.
console.log(str1);
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
