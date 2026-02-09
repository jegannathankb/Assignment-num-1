let addBtn = document.getElementById("addBtn");
let itemInput = document.getElementById("itemInput");
let itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
  let item = itemInput.value;

  if (item === "") {
    alert("Please enter an item");
    return;
  }

  let li = document.createElement("li");
  li.innerText = item;

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";

  removeBtn.addEventListener("click", function () {
    itemList.removeChild(li);
  });

  li.appendChild(removeBtn);
  itemList.appendChild(li);

  itemInput.value = "";
});
