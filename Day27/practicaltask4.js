const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.innerText = "Name is required";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.innerText = "Invalid email address";
    valid = false;
  } else {
    emailError.innerText = "";
  }

  if (!valid) {
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
