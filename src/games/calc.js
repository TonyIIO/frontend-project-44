import startGame from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What is the result of the expression?';

const sign = ['+', '*', '-'];

const calculate = (firstNumber, secondNumber, operator) => {
  let answerCalc;
  switch (operator) {
    case '+':
      answerCalc = firstNumber + secondNumber;
      break;
    case '*':
      answerCalc = firstNumber * secondNumber;
      break;
    case '-':
      answerCalc = firstNumber - secondNumber;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
  return answerCalc;
};

const startRound = () => {
  const firstNumber = getRandomInt(1, 10);
  const secondNumber = getRandomInt(1, 10);
  const operator = sign[getRandomInt(0, 2)];
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, operator);
  return [question, answer];
};

const calc = () => startGame(description, startRound);

export default calc;
