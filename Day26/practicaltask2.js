let button = document.getElementById("themeBtn");

button.addEventListener("click", function () {
  let body = document.body;

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    button.innerText = "Switch to Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    button.innerText = "Switch to Dark Mode";
  }
});
