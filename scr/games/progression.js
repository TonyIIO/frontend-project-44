import { getRandomInt, getProgression } from '../index.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const startRound = () => {
  const arrProgression = getProgression(getRandomInt(2, 4), 0, getRandomInt(5, 10));
  const secretNumb = getRandomInt(0, arrProgression.length - 1);
  const arrProgressionChange = arrProgression.slice();
  arrProgressionChange[secretNumb] = '..';
  const answer = arrProgression[secretNumb];
  const question = `Question: ${arrProgressionChange.join(' ')}!`;
  return [question, answer];
 };

const progression = () => startGame(description, startRound);

export default progression;
