import readlineSync from 'readline-sync';

const startGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');
    if (String(answer) !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export const NOD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a.toString();
};

export const getRandomInt = (min, max) => {
  const mins = Math.ceil(min);
  const maxs = Math.floor(max);
  return Math.floor(Math.random() * (maxs - mins + 1)) + mins;
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const getProgression = (progressionStep, progressionBase, progressionLength) => {
  const arrProgression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression[i] = progressionBase + i * progressionStep;
  }
  return arrProgression;
};

export const calculate = (oneRandNumb, twoRandNumb, randSign) => {
  let answerCalc;
  switch (randSign) {
    case '+':
      answerCalc = oneRandNumb + twoRandNumb;
      break;
    case '*':
      answerCalc = oneRandNumb * twoRandNumb;
      break;
    case '-':
      answerCalc = oneRandNumb - twoRandNumb;
      break;
    default:
      throw new Error(`Unknown operator: '${randSign}'`);
  }
  return answerCalc;
};

export default startGame;
