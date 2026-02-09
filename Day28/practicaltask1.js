const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");

document.getElementById("addBtn").addEventListener("click", () => calculate("+"));
document.getElementById("subBtn").addEventListener("click", () => calculate("-"));
document.getElementById("mulBtn").addEventListener("click", () => calculate("*"));
document.getElementById("divBtn").addEventListener("click", () => calculate("/"));

function calculate(operator) {
  try {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Please enter valid numbers");
    }

    let result;

    switch (operator) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": 
        if (num2 === 0) throw new Error("Cannot divide by zero");
        result = num1 / num2; 
        break;
    }

    resultDiv.innerText = `Result: ${result}`;
  } catch (error) {
    resultDiv.innerText = `Error: ${error.message}`;
  }
}
