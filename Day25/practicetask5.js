let marks = [
  [80, 85, 90],  
  [70, 75, 78],
  [88, 92, 95]  
];

let subjects = ["Maths", "Science", "English"];


for (let i = 0; i < marks.length; i++) {
  console.log("Student", i + 1);
  for (let j = 0; j < marks[i].length; j++) {
    console.log(subjects[j] + ":", marks[i][j]);
  }
  console.log("------------------");
}
