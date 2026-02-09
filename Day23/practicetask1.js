class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }

  displayDetails() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("Marks:", this.marks);
  }
}

let student1 = new Student("SLA", 20, 85);

student1.displayDetails();
