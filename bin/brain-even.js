import readlineSync from 'readline-sync';
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumb =  Math.floor(Math.random() * 101);
const questions = () => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${randomNumb}!`);
    const answer = readlineSync.question('Your answer:');
    if (answer === 'yes' && randomNumb % 2 === 0 || answer === 'no' && randomNumb % 2 !== 0) {
      console.log ('Correct!');
    } else { 
      console.log("Let's try again, Bill!");
      return;
    };
  };
  console.log ('Congratulations, !');
};
console.log (questions());