let A = [
  [1, 2, 3],
  [4, 5, 6]
];

let B = [
  [7, 8, 9],
  [1, 2, 3]
];

let sum = [];

for (let i = 0; i < A.length; i++) {
  sum[i] = [];
  for (let j = 0; j < A[i].length; j++) {
    sum[i][j] = A[i][j] + B[i][j];
  }
}

console.log("Matrix Addition Result:");
for (let i = 0; i < sum.length; i++) {
  console.log(sum[i]);
}
