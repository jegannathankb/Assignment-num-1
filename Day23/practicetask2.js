class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
  }
}

let person1 = new Person("Ravi", 25);
person1.showDetails();
