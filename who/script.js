const buttonStart = document.querySelector('button');
const boy = document.querySelector('.boy');
const girl = document.querySelector('.girl');

const randomInteger = () => {
  let rand = 0 + Math.random() * (1 + 1 - 0);
  return Math.floor(rand);
};

const win = () => {
  boy.classList.remove('animate');
  girl.classList.remove('animate');
  if (randomInteger() === 0) {
    boy.classList.add('win');
  } else {
    girl.classList.add('win');
  }
};

buttonStart.addEventListener('click', () => {
  boy.classList.remove('win');
  girl.classList.remove('win');
  boy.classList.toggle('animate');
  girl.classList.toggle('animate');
  setTimeout(win, 5000);
});

