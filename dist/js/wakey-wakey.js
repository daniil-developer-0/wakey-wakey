'use strict';
let buttonDOM = document.querySelector('.hero__go');
let containerDOM = document.querySelector('.container');
let upperDOM = document.querySelector('.container-upper');
let number = document.querySelector('.upper__count-number');
let goRestSound = new Audio('./assets/notification_sound/pristine-609.mp3');
let goWorkSound = new Audio('./assets/notification_sound/goes-without-saying-608.mp3');
let workTimer = true;
buttonDOM.addEventListener('click', () => {
  document.title = "Work!";
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
        document.title = "Rest!";
        goRestSound.play();
        workTimer = false;
        number.textContent = 5;
      } else {
        document.title = "Work!";
        goWorkSound.play();
        workTimer = true;
        number.textContent = 25;
      }
    }
  }, 60000); // Timer change number every 60000 millisec (1 minute)
});
