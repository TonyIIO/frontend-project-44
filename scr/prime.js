import readlineSync from 'readline-sync';
import { name } from './cli.js';
import { isPrime, getRandomInt } from './index.js';

const prime = () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumb = getRandomInt(1, 99);
    console.log(`Question: ${randomNumb}!`);
    const answer = readlineSync.question('Your answer:');
    if ((answer === 'yes' && isPrime(randomNumb) === true) || (answer === 'no' && isPrime(randomNumb) === false)) {
    console.log('Correct!');
    } else {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default prime;
