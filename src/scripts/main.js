'use strict';

const menu = document.querySelector('.menu');
const button = document.querySelector('.header__menu');
const page = document.querySelector('.page');

button.addEventListener('click', function handleClick() {
  menu.classList.toggle('menu--active');
  page.classList.toggle('page--with-menu');
});
