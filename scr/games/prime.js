import startGame, { getRandomInt, isPrime } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startRound = () => {
  const randomNumb = getRandomInt(1, 99);
  const answer = (isPrime(randomNumb) ? 'yes' : 'no');
  const question = `Question: ${randomNumb}!`;
  return [question, answer];
};

const prime = () => startGame(description, startRound);

export default prime;
