'use strict';

let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu');
menu.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
menu.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

document.querySelector('#title').textContent = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

let promptBlock = document.querySelector('#prompt');
promptBlock.textContent = prompt('Каково Ваше отношение к технике Apple?', '');
///или так записать
// document.getElementById('prompt').textContent = prompt('Каково Ваше отношение к технике Apple?', '');