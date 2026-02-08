const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Cannot divide by zero!" : a / b);

console.log("Addition:", add(10, 34));
console.log("Subtraction:", subtract(14, 45));
console.log("Multiplication:", multiply(13, 5));
console.log("Division:", divide(134, 78));
