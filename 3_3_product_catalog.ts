// Jaime Restrepo
// 3. Data structures
// Exercise 3. Product catalog.

import * as promptSync from "prompt-sync";
const prompt = promptSync();

console.log("**************************************************");
console.log("Starting");
console.log("Product catalog");
console.log("*******************************");

// Create an object:
const product = {id: "1", name: "product1", price: 1000000, tags: ["initialTag1","initialTag2","initialTag3","initialTag4","initialTag5"]};

// Cloning the object and adding a cloned property:
let newProduct = {...product, archivedTags: [...product.tags]};

// Updating the cloned object:
newProduct.name = "newProductName";
newProduct.price = 9999999;
newProduct.tags = ["These are", "new tags for", "the new", "product"];

// Printing:
console.log("The original object:");
console.log(product);
console.log("*****************************");
console.log("The cloned object:");
console.log(newProduct);
console.log("End");
