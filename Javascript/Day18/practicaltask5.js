let amount = 4500;
let discount = 0;

if (amount >= 5000) {
    discount = 0.23;
} else if (amount >= 3000) {
    discount = 0.45;
} else if (amount >= 1000) {
    discount = 0.60;
}

let finalPrice = amount - (amount * discount);

console.log("Final Price:", finalPrice);
