// Jaime Restrepo
// 4. Functions.
// Exercise 2. Recursive Fibonacci.

import * as promptSync from "prompt-sync";
const prompt = promptSync();


console.log("**************************************************");
console.log("Starting");
console.log("Recursive Fibonacci");
console.log("*******************************");

function fibonacci(n: number): number {
    if (n==0) return 0;
    if (n==1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

// Printing:
let error: boolean;
let number: number;

do {
    number = parseInt(prompt("Type a number >>> "));

    if (isNaN(number)) {
        console.log("The entered value is not numeric.");
        error = true;
        continue;
    }

    if (number < 0) {
        console.log("The entered value should be > 0");
        error = true;
        continue;
    }
    error = false;
} while (error)

console.log(`The fibonacci(${number}) = ${fibonacci(number)}`);

console.log("*****************************");
console.log("End");