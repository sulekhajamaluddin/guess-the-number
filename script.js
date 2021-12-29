'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.start-guessing').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guessed-number').value);
  const checkNumber = Math.abs(guessedNumber - secretNumber);
  const isLowValue = guessedNumber - secretNumber < 0;
  if (score > 0) {
    if (!guessedNumber) {
      displayMessage('PLEASE ENTER A NUMBER!!');
    } else if (guessedNumber === secretNumber) {
      displayMessage('CORRECT NUMBER!!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.secret-number').textContent = secretNumber;
      document.querySelector('.secret-number').style.width = '25rem';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.high-score').textContent = highScore;
    } else if (checkNumber < 3) {
      displayMessage('VERY CLOSE...');
      score--;
      displayScore(score);
    } else if (checkNumber >= 3 && checkNumber < 8) {
      displayMessage(isLowValue ? 'LOW...' : 'HIGH...');
      score--;
      displayScore(score);
    } else if (checkNumber >= 8 && checkNumber < 20) {
      displayMessage(isLowValue ? 'TOO LOW...' : 'TOO HIGH');
      score--;
      displayScore(score);
    }
    if (score == 0) {
      displayMessage('YOU LOST!!');
    }
  }
});

document.querySelector('.again-button').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.secret-number').textContent = '?';
  document.querySelector('.secret-number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guessed-number').value = '';
  score = 20;
  displayScore(score);
  displayMessage('Start Guessing... ');
});
