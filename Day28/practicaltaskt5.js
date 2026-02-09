 const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

checkBtn.addEventListener("click", function() {
  errorMsg.innerText = "";
  successMsg.innerText = "";

  try {
    var value = numberInput.value.trim();

    if (value === "") {
      throw new Error("Input cannot be empty!");
    }

    var number = Number(value);
    if (isNaN(number)) {
      throw new Error("Please enter a valid number!");
    }

    if (number < 0) {
      throw new Error("Number cannot be negative!");
    }
    successMsg.innerText = "You entered a valid number: " + number;

  } catch (error) {
    errorMsg.innerText = "Error: " + error.message;
  }
});
