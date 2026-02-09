let cart = [
  { name: "Mobile", price: 15000, quantity: 1 },
  { name: "Headphones", price: 2000, quantity: 2 },
  { name: "Charger", price: 800, quantity: 1 }
];

let totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log("Total Amount:", totalAmount);
