const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", function () {
  console.log("Outer Div Clicked");
});

middle.addEventListener("click", function () {
  console.log("Middle Div Clicked");
});

inner.addEventListener("click", function (event) {
  console.log("Inner Div Clicked");
});
