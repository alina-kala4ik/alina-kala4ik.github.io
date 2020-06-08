"use strict";

const menuBurger = document.body.querySelector('.menu_burger');
const submenuItems = document.body.querySelectorAll('.menu_item--with-submenu');

menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('open');
});

submenuItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  })
});