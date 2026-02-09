let products = [
  { id: 1, name: "Mobile", price: 15000 },
  { id: 2, name: "Laptop", price: 55000 },
  { id: 3, name: "Headphones", price: 2000 }
];

products.forEach(product => {
  console.log("ID:", product.id);
  console.log("Name:", product.name);
  console.log("Price:", product.price);
  console.log("--------------");
});
