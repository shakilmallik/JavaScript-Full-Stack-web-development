//q1. Suppose you are building a payment checkout page and must display the final price after the discount.Create a simple discount calculator that take two values from the variables- the total cost and the discount percentage - and print the discounted value.
let totalValue = 2000;
let discountPercentage = 20;

let discountPrice = totalValue - (discountPercentage/100)*totalValue;
console.log("After Discount the final price is: Rs." ,discountPrice);