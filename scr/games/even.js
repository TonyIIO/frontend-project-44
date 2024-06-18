import { getRandomInt } from '../index.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isAnswer = (num) => (num % 2) === 0;

function startRound() {
  const randomNumb = getRandomInt(1, 99);
  const question =  `Question: ${randomNumb}`;
  const answer = isAnswer(randomNumb) ? 'yes' : 'no';
  return [question, answer];
}

const even = () => startGame(description, startRound);

export default even;
