import readlineSync from 'readline-sync';
import { name } from './cli.js';
import { getRandomInt, getProgression } from './scr/index.js';

const progression = () => {
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arrProgression = getProgression(getRandomInt(2, 4), 0, getRandomInt(5, 10));
    const secretNumb = getRandomInt(0, arrProgression.length);
    const arrProgressionChange = arrProgression.slice();
    arrProgressionChange[secretNumb] = '..';
    console.log(`Question: ${arrProgressionChange.join(' ')}!`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === Number(arrProgression[secretNumb])) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${arrProgression[secretNumb]}. Let's try again, ${name}!`);
    }
  }
  console.log (`Congratulations, ${name}!`);
};

export default progression;
