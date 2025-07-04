// Jaime Restrepo
// 4. Functions.
// Exercise 3. Functional programming applications.

import * as promptSync from "prompt-sync";
const prompt = promptSync();


console.log("**************************************************");
console.log("Starting");
console.log("Functional programming applications");
console.log("*******************************");

const strArray: string[] = ["this is an exercise of","functional programming","it will be using","the map function"];
console.log("Initial string array:");
console.log(strArray);

console.log("Capitalized array:");
const capArray = strArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(capArray);

console.log("Initial numeric array:");
const numArray: number[] = [-100,-20,0,1,20,35,50,55,62,73,75,80,100,2000];
console.log(numArray);

console.log("Filter: Only numbers between 50 and 75:");
const filteredArray: number[] = numArray.filter( num => num >= 50 && num <= 75);
console.log(filteredArray);

console.log("*****************************");
console.log("End");
