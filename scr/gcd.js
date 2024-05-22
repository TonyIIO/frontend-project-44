import readlineSync from 'readline-sync';
import {name} from '../scr/cli.js';
const NOD = () =>{
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
      var y = arguments[i];
      while (x && y) {
        x > y ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
  };

export const gcd = () => {
  console.log(`Hello, ${name}!`);
  console.log ('Find the greatest common divisor of given numbers.');
      for (let i = 0; i < 3; i += 1) {
        const oneRandNumb = Math.floor(Math.random() * 10);
        const twoRandNumb = Math.floor(Math.random() * 10);
        const resultAB = NOD (oneRandNumb, twoRandNumb);
        console.log (`Question: ${oneRandNumb} ${twoRandNumb}`);
        const answer = readlineSync.question('Your answer:');

        if (`${answer} === ${resultAB}`) {
        console.log ('Correct!');
      } else { 
        return `${answer} is wrong answer ;(. Correct answer was ${resultAB}. Let's try again, ${name}!`;
        };
    };
    console.log (`Congratulations, ${name}!`);
  };