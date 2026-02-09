let expenses = [
  [200, 100, 50],   
  [180, 120, 60],   
  [220, 90, 40],   
  [150, 110, 70],   
  [300, 150, 100], 
  [250, 200, 150],  
  [100, 50, 30]     
];

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let categories = ["Food", "Travel", "Others"];

let weeklyTotal = 0;

for (let i = 0; i < expenses.length; i++) {
  console.log("Day:", days[i]);
  let dailyTotal = 0;

  for (let j = 0; j < expenses[i].length; j++) {
    console.log(categories[j] + ":", expenses[i][j]);
    dailyTotal += expenses[i][j];
  }

  console.log("Daily Total:", dailyTotal);
  weeklyTotal += dailyTotal;
  console.log("--------------");
}

console.log("Weekly Total Expense:", weeklyTotal);
