let marks = [
  [80, 85, 90],  
  [70, 75, 78],  
  [88, 92, 95]   
];

let students = ["Arun", "Bala", "Charan"];
let subjects = ["Maths", "Science", "English"];

for (let i = 0; i < marks.length; i++) {
  console.log("Marksheet for:", students[i]);
  let total = 0;

  for (let j = 0; j < marks[i].length; j++) {
    console.log(subjects[j] + ":", marks[i][j]);
    total += marks[i][j];
  }

  let average = total / marks[i].length;
  console.log("Total:", total);
  console.log("Average:", average);
  console.log("-------");
}
