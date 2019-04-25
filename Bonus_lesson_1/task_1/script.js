'use strict';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if(num%i==0) return false;
  }
  return true;
}
for (let i = 0; i < 100; i++){
  if ((isPrime(i))== true) {
    console.log(i + " - делители этого числа: 1 и " + i);
    document.body.innerHTML += i + " - делители этого числа: 1 и " + i + "<br>";
  }
}


