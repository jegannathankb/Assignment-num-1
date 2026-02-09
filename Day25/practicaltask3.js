let seating = [
  ["A1", "A2", "A3", "A4"],
  ["B1", "B2", "B3", "B4"],
  ["C1", "C2", "C3", "C4"]
];

console.log("Seating Arrangement Chart:");

for (let i = 0; i < seating.length; i++) {
  let row = "";
  for (let j = 0; j < seating[i].length; j++) {
    row += seating[i][j] + " ";
  }
  console.log(row);
}
