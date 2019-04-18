'use strict';
let num = 33721;
// arr = [...num+''].map(n=>+n);
arr = [...num+''];

let result = arr.reduce(function(a, b) {
  return a * b;
});

console.log("произведение цифр числа " + num + ": " + result);
let res3 = result**3;
    arrRes3 = [...res3+''];
    n = 2;    
console.log("первые две цифры числа " + result +", возведенного в 3 степень: " + arrRes3.slice(0, n));



