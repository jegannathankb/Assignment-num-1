class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(this.brand + " vehicle started");
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); 
    this.model = model;
  }

  showDetails() {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
  }
}
let car1 = new Car("Toyota", "Innova");
car1.start();        
car1.showDetails();  