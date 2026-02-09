let marks = [78, 85, 90, 66, 88];


let total = marks.reduce((sum, mark) => sum + mark, 0);

let average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average Marks:", average);
