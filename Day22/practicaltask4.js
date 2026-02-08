let product = {
  name: "Laptop",
  price: 50000,
  category: "Electronics",

  updatePrice: function(newPrice) {
    if (newPrice > 0) {
      product.price = newPrice;
      console.log("Price updated to " + newPrice);
    } else {
      console.log("Invalid price. Must be greater than 0.");
    }
  },

  displayProduct: function() {
    console.log("Product: " + product.name + ", Price: " + product.price + ", Category: " + product.category);
  }
};

product.displayProduct();
product.updatePrice(55000);
product.updatePrice(-100);
product.displayProduct();
