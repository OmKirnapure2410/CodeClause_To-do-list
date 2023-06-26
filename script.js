function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var newTask = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        newTask.style.textDecoration = "line-through";
      } else {
        newTask.style.textDecoration = "none";
      }
    });
  
    var taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
  
    var deleteButton = document.createElement("span");
    deleteButton.textContent = "X";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(newTask);
    });
  
    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
  
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  