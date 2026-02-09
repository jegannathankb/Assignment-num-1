const jsonInput = document.getElementById("jsonInput");
const parseBtn = document.getElementById("parseBtn");
const output = document.getElementById("output");

parseBtn.addEventListener("click", function() {
  const jsonString = jsonInput.value;

  try {
    const parsedObject = JSON.parse(jsonString);
    output.innerText = "Parsed Object:\n" + JSON.stringify(parsedObject, null, 2);
  } catch (error) {
    output.innerText = "Error: Invalid JSON\n" + error.message;
  }
});
