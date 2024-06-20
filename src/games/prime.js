import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const generateNumber = getRandomInt(1, 99);
  const answer = (isPrime(generateNumber) ? 'yes' : 'no');
  const question = `Question: ${generateNumber}!`;
  return [question, answer];
};

const prime = () => startGame(description, startRound);

export default prime;
