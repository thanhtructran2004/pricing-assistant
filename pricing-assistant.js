// Create and Initialize Variables
const productName = "Charlotte Tilbury";
let costPerUnit = 40.00;
let basePrice = 49.00;
//discount 10%
let discountRate = 0.10;
//sale tax rate is 7%
let salesTaxRate = 0.07;
//monthly cost is 4000
let fixedMonthlyCosts = 4000.00;

// Calculating Pricing & Profit Metrics
let discountedPrice = basePrice * (1-discountRate);

let finalPriceWithTax = (discountedPrice * (1 + salesTaxRate)).toFixed(2);
let profitPerUnit = (finalPriceWithTax - costPerUnit).toFixed(2);
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

//Print to Console
console.log ("Product Name:", productName);
console.log ("Discounted Price (before tax):", discountedPrice);
console.log ("Final Price with Tax:", finalPriceWithTax);
console.log ("Profit per Unit:", profitPerUnit);
console.log ("Break-even units:", breakEvenUnits);
console.log ("Per-unit profitability:", isProfitablePerUnit);
