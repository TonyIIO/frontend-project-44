import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

function startRound() {
  const generateNumber = getRandomInt(1, 99);
  const question = `Question: ${generateNumber}`;
  const answer = isEven(generateNumber) ? 'yes' : 'no';
  return [question, answer];
}

const even = () => startGame(description, startRound);

export default even;
