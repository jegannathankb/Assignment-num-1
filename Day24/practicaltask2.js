let numbers = [10, 15, 20, 25, 30, 33, 40];

let evenNumbers = numbers.filter(num => num % 2 === 0);

let oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
