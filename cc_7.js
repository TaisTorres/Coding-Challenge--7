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
     else if (years >= 3) loyaltyDiscount = amount *.90;       //loyaty discounts based on the total years of membership
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

    if (expedited) totalCost += 10     //Used only if expedited shipping is true

    console.log(`Shipping Cost: $${totalCost.toFixed(2)}`);
}
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

//Task 5
function calculateLoanInterest(principal, rate, years) {
    let interest = (principal * rate) * years                     //equation for the loan interest over x years
    console.log(`Total Loan Interest: $${interest.toFixed(2)}`);
}
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

//Task 6
let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions( transactions, amount) {
    let highValue = transactions.filter(amount);                //filter out all the maounts under 1000
    console.log(`High Value Orders: ${highValue}`);
}

filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]

//Task 7
function createBudgetTracker() {
    let totalBudget = 0;

    return function (expense) {
    totalBudget -= expense;            // subtracts the expenses from the budget
    return `Current Balance: $${totalBudget}`;
    }
}

let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"

//Task 8
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue.toFixed(2);
    return calculateGrowth(years + 1, revenue * 1.05);   //calculation for expected growth until year 10 
}

console.log(`Projected Revenue: $${calculateGrowth(8, 1000)}`); // Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000)}`); // Expected output: "Projected Revenue: $6381.41"