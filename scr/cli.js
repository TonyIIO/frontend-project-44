import readlineSync from 'readline-sync';
export const name = (name) => {
    const name = readlineSync.question('May I have your name? ');    
};