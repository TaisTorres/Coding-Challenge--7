// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal*taxRate)) - discount;
    return total;
}

console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"
