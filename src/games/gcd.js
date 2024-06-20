import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const NOD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a.toString();
};

const startRound = () => {
  const firstNumber = getRandomInt(1, 50);
  const secondNumber = getRandomInt(1, 50);
  const answer = NOD(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  return [question, answer];
};

const gcd = () => startGame(description, startRound);

export default gcd;
