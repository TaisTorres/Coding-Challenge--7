// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal*taxRate)) - discount;
    return total.toFixed(2);
}

console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"

// Task 2
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return hourlyWage.toFixed(2);  //Output only goes to two decimal places
}

console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`); // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35)}`); // Expected output: "Hourly Wage: $41.21"

// Task 3
const calculateLoyaltyDiscount = (amount, years) => {
    let loyaltyDiscount = 0
    if (years >= 5) loyaltyDiscount = amount *.85;
     else if (years >= 3) loyaltyDiscount = amount *.90;
     else if (years < 3) loyaltyDiscount = amount * .95;
        
     console.log(`Discounted Price: $${loyaltyDiscount.toFixed(2)}`);
}
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

//Task 4 Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    totalCost = 0
    if (location === "USA") totalCost = (weight * .5) + 5
    else if (location ==="Canada") totalCost = (weight * .7) + 10

    if (expedited) totalCost += 10

    console.log(`Shipping Cost: $${totalCost.toFixed(2)}`);
}
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"
