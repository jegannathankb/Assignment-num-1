function addItem() {
  let li = document.createElement("li");
  li.innerText = "New Item";

  document.getElementById("myList").appendChild(li);
}
