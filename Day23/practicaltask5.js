class School {
  constructor(schoolName) {
    this.schoolName = schoolName;
  }

  showSchool() {
    console.log("School Name:", this.schoolName);
  }
}

class Student extends School {
  constructor(schoolName, name, standard, marks) {
    super(schoolName);
    this.name = name;
    this.standard = standard;
    this.marks = marks;
  }

  displayStudent() {
    this.showSchool();
    console.log("Student Name:", this.name);
    console.log("Standard:", this.standard);
    console.log("Marks:", this.marks);
    console.log("-------------------");
  }
}
let s1 = new Student("Green Valley School", "Arjun", 10, 88);
let s2 = new Student("Green Valley School", "Priya", 9, 92);

s1.displayStudent();
s2.displayStudent();
