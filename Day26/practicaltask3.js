let addBtn = document.getElementById("addBtn");
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
  let task = todoInput.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  let li = document.createElement("li");
  li.innerText = task;

  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
});
