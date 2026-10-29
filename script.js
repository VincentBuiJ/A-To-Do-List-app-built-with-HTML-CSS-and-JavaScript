const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const newTask = document.createElement("li");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  taskTextSpan.addEventListener("click", function () {
    taskTextSpan.style.textDecoration =
      taskTextSpan.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    newTask.remove();
    taskCount.textContent = "Tasks: " + taskList.children.length;
  });

  newTask.appendChild(taskTextSpan);
  newTask.appendChild(deleteButton);

  taskList.appendChild(newTask);
  taskCount.textContent = "Tasks: " + taskList.children.length;

  taskInput.value = "";
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});
