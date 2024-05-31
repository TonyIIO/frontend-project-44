import readlineSync from 'readline-sync';

export const even = () => {
console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumb =  Math.floor(Math.random() * 10);
    console.log (`Question: ${randomNumb}!`);
    const answer = readlineSync.question('Your answer:');
    if (answer === 'yes' && (randomNumb % 2) === 0 || answer === 'no' && (randomNumb % 2) !== 0) {
        console.log ('Correct!');
    } else {
        return console.log(`Let's try again, ${name}!`);
     };    
  };   
  console.log (`Congratulations, ${name}!`);
};
import {name} from '../scr/cli.js';