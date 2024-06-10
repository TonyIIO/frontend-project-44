import readlineSync from 'readline-sync';
import {name} from '../scr/cli.js';
import {getRandomInt} from '../scr/index.js';

export const calc = () => {
  console.log(`Hello, ${name}!`);
  console.log ('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const oneRandNumb = getRandomInt(1, 10);
    const twoRandNumb = getRandomInt(1, 10);
    const sign = ['+', '*', '-'];
    const randSign = sign[getRandomInt(0, 2)];
    let resultAB = 0;
    switch (randSign) {
      case '+': 
      resultAB = oneRandNumb + twoRandNumb;
      break;
      case '*': 
      resultAB = oneRandNumb * twoRandNumb;
      break;
      case '-': 
      resultAB = oneRandNumb - twoRandNumb;
      break;  
    };    
    console.log (`Question: ${oneRandNumb} ${randSign} ${twoRandNumb}`);
    const answer = readlineSync.question('Your answer:');
      if (Number (answer) === resultAB) {
      console.log ('Correct!');
    } else {
      return console.log (`${answer} is wrong answer ;(. Correct answer was ${resultAB}. Let's try again, ${name}!`);       
      };      
  };
  console.log (`Congratulations, ${name}!`);
};