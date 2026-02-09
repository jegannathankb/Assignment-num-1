const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const loginResult = document.getElementById("loginResult");

const validUsername = "admin";
const validPassword = "1234";

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  let isValid = true;

  usernameError.innerText = "";
  passwordError.innerText = "";
  loginResult.innerText = "";

  if (usernameInput.value.trim() === "") {
    usernameError.innerText = "Username is required";
    isValid = false;
  }

  if (passwordInput.value.trim() === "") {
    passwordError.innerText = "Password is required";
    isValid = false;
  }
  if (isValid) {
    if (usernameInput.value === validUsername && passwordInput.value === validPassword) {
      loginResult.innerText = "Login Successful!";
      loginResult.className = "success";
    } else {
      loginResult.innerText = "Invalid username or password";
      loginResult.className = "error";
    }
  }
});
