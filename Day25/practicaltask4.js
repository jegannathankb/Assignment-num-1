let board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  [" ", "X", " "]
];

console.log("Game Board:");

for (let i = 0; i < board.length; i++) {
  let row = "";
  for (let j = 0; j < board[i].length; j++) {
    row += board[i][j] + " ";
  }
  console.log(row);
}
