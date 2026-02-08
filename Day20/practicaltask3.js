function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("344 is", checkOddEven(7));
console.log("129 is", checkOddEven(12));
