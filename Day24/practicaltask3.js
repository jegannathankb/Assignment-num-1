let products = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 }
];

let updatedProducts = products.map(product => ({
  name: product.name,
  price: product.price,
  finalPrice: product.price + product.price * 0.10
}));

console.log(updatedProducts);
