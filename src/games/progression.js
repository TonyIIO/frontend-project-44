import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (progressionStep, progressionBase, progressionLength) => {
  const arrProgression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression[i] = progressionBase + i * progressionStep;
  }
  return arrProgression;
};

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
