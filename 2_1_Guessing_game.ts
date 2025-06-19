// 2.1. Guessing game
// Jaime Restrepo

import * as promptSync from "prompt-sync"

const prompt = promptSync();
const attemps: number = 3;
const random_number: number = Math.floor(Math.random() * 10);
let user_input: number;
let clue: string;
let won: boolean = false;

console.log("Starting");
console.log("Guess a number between 0 and 9.");

for (let i=1; i <= attemps; i++) {
  user_input = parseInt(prompt("Type a number between 0 and 9 ==>"));
  
  if (isNaN(user_input)) {
    console.log("Failed attemp. The entered value is invalid.");
  } 
  else {
    if (user_input === random_number) {
      console.log("**************************************************");
      console.log("Congratulations, you found the secret.     *******");
      won = true;
      break;
    }
    else{
      if(i < attemps){
        if(random_number > user_input){
          clue = "The secret number is higher";
        }
        else{
          clue = "The secret number is less";
        }
        console.log("Failed attemp. " + clue);
      }
    }
  }
}

if (won === false) {
  console.log("**************************************************");
  console.log("You lost!!!!     *********************************");
}

console.log("**************************************************");
console.log("The secret number was " + random_number);
console.log("End");