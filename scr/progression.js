import readlineSync from 'readline-sync';
import {name} from '../scr/cli.js';
import {getRandomInt} from '../scr/index.js';
export const progression = () => {
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const RandomStepProgression =  getRandomInt(2, 3);
    const lengthProgression = getRandomInt(6, 10);
    const arrProgression = [];
    for (let i = 0; arrProgression.length < lengthProgression; i += RandomStepProgression) {
      arrProgression.push(i);
    };   
    const secretNumb = getRandomInt(0, Number(lengthProgression));
    const arrProgressionChange = arrProgression.slice();
    arrProgressionChange[secretNumb] = '..';
    console.log (`Question: ${String(arrProgressionChange)}!`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === Number(arrProgression[secretNumb])) {
        console.log ('Correct!');
    } else {
      return console.log (`${answer} is wrong answer ;(. Correct answer was ${arrProgression[secretNumb]}. Let's try again, ${name}!`);       
      };      
  };   
  console.log (`Congratulations, ${name}!`);
};