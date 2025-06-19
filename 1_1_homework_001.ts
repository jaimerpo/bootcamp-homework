console.log('Homework 001');
console.log('##########################');

let price: number[] = [29.99,49.99,19.99];
let tax_rate: number = 0.07;

let product_taxes: number = 0;
let product_cost_with_taxes: number = 0;

let total_cost_without_taxes: number = 0;
let total_taxes: number = 0;
let total_cost_with_taxes: number = 0;

for (let i = 0; i < 3; i++) {

	console.log("Product " + (i + 1) + ":");
	console.log("Cost_Without_Taxes = " + price[i]);
	total_cost_without_taxes = total_cost_without_taxes + price[i];
	
	product_taxes = tax_rate * price[i];
	console.log("Product Taxes = " + product_taxes);
	total_taxes = total_taxes + product_taxes;
	
	product_cost_with_taxes = price[i] + product_taxes;
	console.log("Cost_With_Taxes = " + product_cost_with_taxes);
	total_cost_with_taxes = total_cost_with_taxes + product_cost_with_taxes;
	console.log('##########################');
} 
console.log('Cart total cost without taxes = ' + total_cost_without_taxes);
console.log('Total taxes = ' + total_taxes);
console.log('Cart total cost with taxes = ' + total_cost_with_taxes);


