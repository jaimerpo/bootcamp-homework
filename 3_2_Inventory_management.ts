// Jaime Restrepo
// 3. Data structures
// Exercise 2. Inventory Management System

import * as promptSync from "prompt-sync";
const prompt = promptSync();

let userInputIsInvalid: boolean;
let strId: string;

console.log("**************************************************");
console.log("Starting");
console.log("Inventory Management System");
console.log("*******************************");

// Defining the initial inventory array:
let inventory = [
  {id: "1", name: "product1", price: 1000000},
  {id: "2", name: "product2", price: 2000000},
  {id: "3", name: "product3", price: 3000000},
  {id: "4", name: "product4", price: 4000000},
  {id: "5", name: "product5", price: 5000000}
];
console.log("The initial inventory...");
console.log(inventory);


// Adding a new item:
console.log("Adding a new item...");
const newId: string = prompt("Type de new product ID >>> ");
const newName: string = prompt("Type de new product name >>> ");
let newPrice: number;

do {
  newPrice = parseFloat(prompt("Type de new product price >>> "));

  if (isNaN(newPrice)) {
    console.log("The entered value is not numeric.");
    userInputIsInvalid = true;
    continue;
  }
  
  if (newPrice <= 0) {
    console.log("The price should be > 0");
    userInputIsInvalid = true;
    continue;
  }

  userInputIsInvalid = false;

} while (userInputIsInvalid)

const newItem = {id: newId, name: newName, price: newPrice}
inventory.push(newItem);
console.log("A new product was added...");
console.log(newItem);


// Deleting a producto by ID:
console.log("*******************************");
console.log("Deleting an item...");
strId = prompt("Type a product ID to be deleted >>> ");
let deleted: boolean = false;

for (let i = 0; i < inventory.length; i++){
  if (inventory[i].id == strId) {
      inventory.splice(i,1);
      deleted = true;
      break;
  }
}
deleted ? console.log(`The item with ID = ${strId} was deleted`) : console.log(`The item with ID = ${strId} was not found`);


// Modify a product price:
let modified: boolean = false;
console.log("*******************************");
console.log("Modify a product price...");
strId = prompt("Type a product ID to be modified >>> ");

for (let i = 0; i < inventory.length; i++){
  if (inventory[i].id == strId) {
    do {
      newPrice = parseFloat(prompt("Type de new product price >>> "));

      if (isNaN(newPrice)) {
        console.log("The typed value is not numeric.");
        userInputIsInvalid = true;
        continue;
      }
      
      if (newPrice <= 0) {
        console.log("The entered value should be > 0");
        userInputIsInvalid = true;
        continue;
      }
    
      userInputIsInvalid = false;
    
    } while (userInputIsInvalid)

    inventory[i].price = newPrice;
    modified = true;
    break;
  }
  
}

modified ? console.log(`The item with ID = ${strId} was updated`) : console.log(`The item with ID = ${strId} was not found`);


// Iterate over the inventory
console.log("*****************************");
console.log("Printing the inventory...");
console.log("*****************************");

for (let product of inventory) {
  for (let key of Object.keys(product) as Array<keyof typeof product>){
    console.log(`The key ${key} has the value ${product[key]}`);
  }
  console.log("*****************************");
}

console.log("End");