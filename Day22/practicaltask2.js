 let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023,
  color: "Red",

 
  displayDetails: function() {
    console.log(
      `Car Details: ${this.brand} ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  }
};
 
car.displayDetails();

 