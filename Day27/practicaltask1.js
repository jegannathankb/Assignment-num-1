let counter = 0;

const countText = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  counter++;
  countText.innerText = counter;
});
