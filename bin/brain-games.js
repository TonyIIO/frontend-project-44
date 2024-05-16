#!/usr/bin/env node
console.log('Welcome to the Brain Games!')
import readlineSync from 'node_modules/readline-sync/lib/readline-sync.js';

/* import readlineSync from './lib/readline-sync.js'; 

console.log(`May I have your name? ${name}`)*/
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)