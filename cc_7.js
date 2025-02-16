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
