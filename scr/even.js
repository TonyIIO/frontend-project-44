import readlineSync from 'readline-sync';
import {name} from '../scr/cli.js';
export const questions = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumb =  Math.floor(Math.random() * 10);
    console.log(`Question: ${randomNumb}!`);
    const answer = readlineSync.question('Your answer:');
    if (answer === 'yes' && randomNumb % 2 === 0 || answer === 'no' && randomNumb % 2 !== 0) {
        console.log ('Correct!');
    } else { 
      return "Let's try again, Bill!";
    };
  };
    console.log (`Congratulations,${name}!`);
};
