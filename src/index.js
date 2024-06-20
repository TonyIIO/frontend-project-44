import readlineSync from 'readline-sync';

const startGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer:');
    if (String(answer) !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
