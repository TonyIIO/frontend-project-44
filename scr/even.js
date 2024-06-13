import readlineSync from 'readline-sync';
import name from './cli.js';
import { getRandomInt } from './index.js';

const even = () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumb = getRandomInt(1, 99);
    console.log(`Question: ${randomNumb}!`);
    const answer = readlineSync.question('Your answer:');
    if ((answer === 'yes' && (randomNumb % 2) === 0) || (answer === 'no' && (randomNumb % 2) !== 0)) {
      console.log('Correct!');
    } else {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return;
};

export default even;
