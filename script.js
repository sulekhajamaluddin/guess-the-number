'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.secret-number').textContent = secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guessed-number').value);
  const message = document.querySelector('.start-guessing');
  const checkNumber = Math.abs(guessedNumber - secretNumber);
  const isLowValue = guessedNumber - secretNumber < 0;
  if (score > 0) {
    if (!guessedNumber) {
      message.textContent = 'PLEASE ENTER A NUMBER!!';
    } else if (guessedNumber === secretNumber) {
      message.textContent = 'CORRECT NUMBER!!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.secret-number').textContent = secretNumber;
      document.querySelector('.secret-number').style.width = '25rem';
    } else if (checkNumber < 3) {
      console.log('checkNumber < 3');
      message.textContent = 'VERY CLOSE...';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (checkNumber >= 3 && checkNumber < 8) {
      console.log('checkNumber >= 3 && checkNumber < 8');
      message.textContent = isLowValue ? 'LOW...' : 'HIGH...';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (checkNumber >= 8 && checkNumber < 20) {
      console.log(checkNumber >= 8 && checkNumber < 20);
      message.textContent = isLowValue ? 'TOO LOW...' : 'TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score == 0) {
      message.textContent = 'YOU LOST!!';
    }
  }
});
