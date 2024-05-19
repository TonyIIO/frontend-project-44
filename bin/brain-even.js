import readlineSync from 'readline-sync';
import { name } from './brain-games';
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumb =  Math.floor(Math.random() * 101);

console.log(`Question: ${randomNumb}!`);




const match = () => {
    for (let i = 0; i < 3; i += 1) {
      const answer = readlineSync.question('Your answer:');
      if (answer === 'yes' && randomNumb % 2 === 0) {
        return 'Correct!';    
      };
      if (answer === 'no' && randomNumb % 2 !== 0) {
        return 'Correct!';
      };
      return "Let's try again, Bill!";
     };
    return `Congratulations, ${name}!`;
};
