class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  show() {
    console.log(this.name);
    console.log(this.age);
  }
}

let p1 = new Person("Ajay", 22);
p1.show();
