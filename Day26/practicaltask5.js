let count = 0;

let countDisplay = document.getElementById("count");
let incBtn = document.getElementById("incBtn");
let decBtn = document.getElementById("decBtn");
let resetBtn = document.getElementById("resetBtn");

incBtn.addEventListener("click", function () {
  count++;
  countDisplay.innerText = count;
});

decBtn.addEventListener("click", function () {
  count--;
  countDisplay.innerText = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.innerText = count;
});
