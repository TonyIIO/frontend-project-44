import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

function startRound() {
  const arrRound = [];
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const generateNumber = getRandomInt(1, 99);
    const question = `Question: ${generateNumber}`;
    const answer = isEven(generateNumber) ? 'yes' : 'no';
    arrRound.push([question, answer]);
  }
  return arrRound;
}

const even = () => startGame(description, startRound);

export default even;
