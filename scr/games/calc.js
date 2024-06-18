import startGame, { getRandomInt, calculate } from '../index.js';

const description = 'What is the result of the expression?';

const sign = ['+', '*', '-'];

const startRound = () => {
  const oneRandNumb = getRandomInt(1, 10);
  const twoRandNumb = getRandomInt(1, 10);
  const randSign = sign[getRandomInt(0, 2)];
  const question = `Question: ${oneRandNumb} ${randSign} ${twoRandNumb}`;
  const answer = calculate(oneRandNumb, twoRandNumb, randSign);
  return [question, answer];
};

const calc = () => startGame(description, startRound);

export default calc;
