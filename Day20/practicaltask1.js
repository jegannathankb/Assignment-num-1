function multiplicationTable(number, upto = 10) {
  console.log(`Multiplication Table for {number}:`);
  for (let i = 1; i <= upto; i++) {
   console.log(number + " x " + i + " = " + (number * i));

  }
}


multiplicationTable(2);


