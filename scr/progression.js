import readlineSync from 'readline-sync';
import {name} from '../scr/cli.js';
export const progression = () => {
console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
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
