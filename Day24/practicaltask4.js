let students = [
  { name: "Arun", marks: 78 },
  { name: "Bala", marks: 92 },
  { name: "Charan", marks: 65 },
  { name: "Divya", marks: 88 }
];

let result = students.filter(student => student.marks > 80);

console.log(result);
