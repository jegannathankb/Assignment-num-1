class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  display() {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Salary:", this.salary);
    console.log("----------------");
  }
}
let employees = [];

employees.push(new Employee(1, "Ravi", 25000));
employees.push(new Employee(2, "Anu", 30000));
employees.push(new Employee(3, "Karthik", 28000));

employees.forEach(emp => emp.display());
