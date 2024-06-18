import startGame, { getRandomInt, NOD } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const startRound = () => {
  const oneRandNumb = getRandomInt(1, 50);
  const twoRandNumb = getRandomInt(1, 50);
  const answer = NOD(oneRandNumb, twoRandNumb);
  const question = `Question: ${oneRandNumb} ${twoRandNumb}`;
  return [question, answer];
};

const gcd = () => startGame(description, startRound);

export default gcd;
