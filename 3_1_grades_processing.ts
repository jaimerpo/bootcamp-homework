// Jaime Restrepo
// 3. Data structures
// Exercise 1. Grades processing

import * as promptSync from "prompt-sync";

const prompt = promptSync();
let numOfGrades: number;
let user_input_is_invalid: boolean;
let grades: number[] = [];
let typedGrade: number;
let avg: number;
let sumGrades: number = 0;
let processedGrades: number = 0;
let avgWasExceptional: boolean = false;

console.log("**************************************************");
console.log("Starting");
console.log("Grades processing");

do {
  numOfGrades = parseInt(prompt("Number of grades >>> "),10);

  if (isNaN(numOfGrades)) {
    console.log("The entered value is not numeric.");
    user_input_is_invalid = true;
    continue;
  }
  
  if (numOfGrades <= 0) {
    console.log("The entered value should be > 0");
    user_input_is_invalid = true;
    continue;
  }

  if (numOfGrades % 1 != 0) {
    console.log("The entered value is not an integer.");
    user_input_is_invalid = true;
    continue;
  }

  user_input_is_invalid = false;

} while (user_input_is_invalid)


for (let i=0; i < numOfGrades; i++){
  do {
    typedGrade = parseFloat(prompt(`Type grade ${i+1} >>> `));
    
    if (isNaN(typedGrade)) {
      console.log("The entered value is not numeric");
      user_input_is_invalid = true;
      continue;
    } 

    if (typedGrade == 1000 || typedGrade == -1) {
      user_input_is_invalid = false;
      continue;
    }

    if (typedGrade < 0 || typedGrade > 100) {
      console.log("The entered grade should be between 0 and 100.");
      user_input_is_invalid = true;
      continue;
    }
  
    user_input_is_invalid = false;
  
  } while (user_input_is_invalid)
  
  grades.push(typedGrade);
  
}

for (let g of grades) {
  if (g == -1) { continue }
  if (g == 1000) { avgWasExceptional = true; break; }

  sumGrades += g;
  processedGrades += 1;

}

avg = avgWasExceptional ? 100 : sumGrades / processedGrades;

console.log("******************");
console.log(`Grades: ${grades}`);
console.log(`Average score: ${avg}`);

console.log("******************");
console.log("End");
