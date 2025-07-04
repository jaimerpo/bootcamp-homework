// Jaime Restrepo
// 2.Conditional and loops
// Exercise 2. Temperature converter


import * as promptSync from "prompt-sync";

const prompt = promptSync();
let option: string;
let exit: boolean = false;
let user_input: number;
let user_input_is_invalid: boolean;
let result: number;

console.log("**************************************************");
console.log("Starting");
console.log("Temperature converter");

while (exit === false) {
  console.log("***************************");
  console.log("Select an option...");
  console.log("1. Celsius to Kelvin");
  console.log("2. Kelvin to Celsius");
  console.log("3. Exit");
  option = prompt("Type your option >>> ");

  switch (option) {
    case "1":
      do {
        user_input = parseFloat(prompt("Type a temperature value in Celsius ==> "));
        if (isNaN(user_input)) {
          console.log("The entered value is invalid.");
          user_input_is_invalid = true;
          continue;
        } 

        if (user_input < -273) {
          console.log("The value should be greater than -273.");
          user_input_is_invalid = true;
          continue;
        }

        user_input_is_invalid = false;

      } while (user_input_is_invalid)

      result = user_input + 273
      console.log(`${user_input} Celsius is equivalent to ${result} Kelvin`);
      break;

    case "2":
      do {
        user_input = parseFloat(prompt("Type a temperature value in Kelvin ==> "));
        if (isNaN(user_input)) {
          console.log("The entered value is invalid.");
          user_input_is_invalid = true;
          continue;
        } 

        if (user_input < 0) {
          console.log("The value should be >= 0");
          user_input_is_invalid = true;
          continue;
        }
        user_input_is_invalid = false;
      } while (user_input_is_invalid)

      result = user_input - 273
      console.log(`${user_input} Kelvin is equivalent to ${result} Celsius`);
      break;
    
    case "3":
      exit = true;
      break;

    default:
      console.log("Invalid option, try again.");
  }    
}
  
console.log("******************");
console.log("End");
