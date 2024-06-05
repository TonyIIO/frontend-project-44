import readlineSync from 'readline-sync';
import {name} from '../scr/cli.js';

export const calc = () => {
  console.log(`Hello, ${name}!`);
  console.log ('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const oneRandNumb = Math.floor(Math.random() * 10);
    const twoRandNumb = Math.floor(Math.random() * 10);
    const resultAB = `${oneRandNumb + twoRandNumb}`;
    console.log (`Question: ${oneRandNumb} + ${twoRandNumb}`);
    const answer = readlineSync.question('Your answer:');
    if (answer === resultAB) {
      console.log ('Correct!');
    } else {
      return console.log (`${answer} is wrong answer ;(. Correct answer was ${resultAB}. Let's try again, ${name}!`);       
      };      
  };
  console.log (`Congratulations, ${name}!`);
};