'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 23;*/

/*const x = function () {
  console.log(23);
};*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please write a number between 1 and 20';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Very Good! Correct Number';
    //when player wins the background color will change
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('number').style.width = '30rem';
  } else {
    if (guess - secretNumber < 0) {
      if ((guess - secretNumber) * -1 > 10) {
        document.querySelector('.message').textContent = 'Too Far!';
      } else {
        document.querySelector('.message').textContent = 'Close Call!';
      }
    } else {
      if (guess - secretNumber > 10) {
        document.querySelector('.message').textContent = 'Too Far!';
      } else {
        document.querySelector('.message').textContent = 'Close Call!';
      }
    }
    score--;
    document.querySelector('.score').textContent = score;

    if (score === 0) {
      document.querySelector('.message').textContent = 'Game Over!';
    }
  }
});
