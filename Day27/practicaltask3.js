const input = document.getElementById("inputText");
const preview = document.getElementById("preview");

input.addEventListener("input", function () {
  preview.innerText = input.value || "Your text will appear here...";
});
