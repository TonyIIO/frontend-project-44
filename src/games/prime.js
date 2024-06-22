import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < (number / 2); i += 1) { 
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const arrRound = [];
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const generateNumber = getRandomInt(1, 99);
    const answer = (isPrime(generateNumber) ? 'yes' : 'no');
    const question = `Question: ${generateNumber}!`;
    arrRound.push([question, answer]);
}
return arrRound;
};

const prime = () => startGame(description, startRound);

export default prime;
