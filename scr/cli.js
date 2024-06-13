import readlineSync from 'readline-sync';

const name = readlineSync.question(`Welcome to the Brain Games!
May I have your name?`);

export default name;
