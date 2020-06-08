"use strict";

const select = document.body.querySelector('#select');
const selectInput =select.querySelector('#selectInput');
const selectList = select.querySelector('#selectList');
const selectItems = selectList.querySelectorAll('li');

select.addEventListener('click', () => {
  select.classList.toggle('open');
});

selectItems.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.stopPropagation();
    const itemValue = evt.target.textContent;
    if (selectInput.value === itemValue) {
      select.classList.remove('open');
      return;
    }
    selectInput.value = itemValue;
    select.classList.remove('open');
  })
});

document.body.addEventListener('click', (evt) => {
  if (evt.target === select || evt.target === selectInput) {
    return;
  }
  select.classList.remove('open');
})