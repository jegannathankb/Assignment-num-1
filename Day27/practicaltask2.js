const display = document.getElementById("typedKeys");

document.addEventListener("keydown", function(event) {
  display.innerText = `You pressed: "${event.key}"`;
});
