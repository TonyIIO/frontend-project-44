import readlineSync from 'readline-sync';
import { name } from './cli.js';
import { NOD, getRandomInt } from './index.js';

const gcd = () => {
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const oneRandNumb = getRandomInt(1, 50);
    const twoRandNumb = getRandomInt(1, 50);
    const resultAB = NOD(oneRandNumb, twoRandNumb);
    console.log (`Question: ${oneRandNumb} ${twoRandNumb}`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === Number(resultAB)) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${resultAB}. Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gcd;
