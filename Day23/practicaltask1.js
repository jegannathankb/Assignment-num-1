class Student {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }

  display() {
    console.log("Name:", this.name);
    console.log("Mark:", this.mark);
  }
}

let s1 = new Student("Kumar", 88);
s1.display();
