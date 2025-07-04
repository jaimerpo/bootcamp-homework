// Jaime Restrepo
// 4. Functions.
// Exercise 1. Functions and geometry.

import * as promptSync from "prompt-sync";
const prompt = promptSync();


console.log("**************************************************");
console.log("Starting");
console.log("Functions and geometry.");
console.log("*******************************");

// Named function:
function circleArea(radius: number): number {
    return 3.1416 * (radius ** 2);
}

// Anonymous function to calculate the perimeter of a rectangle:
const rectanglePerimeter = function(length: number, height: number): number {
    return 2 * length + 2 * height;
}

// Arrow function
const cubeVolume = (sideLength: number): number => sideLength ** 3;

// Printing:
const circleRadius: number = 100;
console.log(`The area of a circle with radius ${circleRadius} is ${circleArea(circleRadius)}`);

const rectangleLength: number = 200;
const rectangleHeight: number = 300;
console.log(`The perimeter of a rectangle with length = ${rectangleLength} and height = ${rectangleHeight} is ${rectanglePerimeter(rectangleLength, rectangleHeight)}`);

const sideLength: number = 500
console.log(`The volume of a cube with side ${sideLength} is ${cubeVolume(sideLength)}`);

console.log("*****************************");
console.log("End");
