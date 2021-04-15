'use strict';
let buttonDOM = document.querySelector('.hero__go');
let containerDOM = document.querySelector('.container');
let upperDOM = document.querySelector('.container-upper');
let number = document.querySelector('.upper__count-number');
let workTimer = true;
buttonDOM.addEventListener('click', () => {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
  containerDOM.style.display = 'none';
  upperDOM.style.display = 'flex';
  setInterval(() => {
    if (typeof Number(number.textContent) !== "number") {
      console.log(number.textContent)
      throw 'element \'.textContent\' is not a Number type!';
    }

    if (Number(number.textContent) !== 1) {
      number.textContent -= 1;
    } else if (Number(number.textContent) <= 1) {
      if (workTimer) {
        workTimer = false;
        number.textContent = 5;
      } else {
        workTimer = true;
        number.textContent = 25;
      }
    }
  }, 1000);
});
