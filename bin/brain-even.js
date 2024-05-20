import readlineSync from 'readline-sync';
import { name } from '../scr/cli';
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumb =  Math.floor(Math.random() * 101);
const questions = () => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${randomNumb}!`);
    const answer = readlineSync.question('Your answer:');
    if (answer === 'yes' && randomNumb % 2 === 0) {
      console.log ('Correct!');
    } else if (answer === 'no' && randomNumb % 2 !== 0) {
      console.log ('Correct!');
    } else { 
      return "Let's try again, Bill!";
  };
  console.log (`Congratulations, ${name}!`);
  };
};
console.log (questions());