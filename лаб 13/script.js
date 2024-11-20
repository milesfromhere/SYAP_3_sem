document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const showAllButton = document.getElementById("showAll");
    const showCompletedButton = document.getElementById("showCompleted");
    const showIncompleteButton = document.getElementById("showIncomplete");
  
    let tasks = [];
  
    const renderTasks = (filter = "all") => {
      taskList.innerHTML = "";
      tasks
        .filter(task => {
          if (filter === "completed") return task.completed;
          if (filter === "incomplete") return !task.completed;
          return true;
        })
        .forEach((task, index) => {
          const taskItem = document.createElement("li");
          taskItem.className = "task-item";
  
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = task.completed;
          checkbox.addEventListener("change", () => toggleTask(index));
  
          const taskName = document.createElement("span");
          taskName.textContent = task.name;
          taskName.style.textDecoration = task.completed ? "line-through" : "none";
  
          const editButton = document.createElement("button");
          editButton.textContent = "Редактировать";
          editButton.addEventListener("click", () => editTask(index));
  
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Удалить";
          deleteButton.addEventListener("click", () => deleteTask(index));
  
          taskItem.append(checkbox, taskName, editButton, deleteButton);
          taskList.appendChild(taskItem);
        });
    };
  
    const addTask = () => {
      const taskName = taskInput.value.trim();
      if (taskName) {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = "";
        renderTasks();
      }
    };
  
    const toggleTask = index => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    };
  
    const editTask = index => {
      const newTaskName = prompt("Редактировать задачу:", tasks[index].name);
      if (newTaskName !== null) {
        tasks[index].name = newTaskName.trim();
        renderTasks();
      }
    };
  
    const deleteTask = index => {
      tasks.splice(index, 1);
      renderTasks();
    };
  
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", e => {
      if (e.key === "Enter") addTask();
    });
  
    showAllButton.addEventListener("click", () => renderTasks("all"));
    showCompletedButton.addEventListener("click", () => renderTasks("completed"));
    showIncompleteButton.addEventListener("click", () => renderTasks("incomplete"));
  
    renderTasks();
  });
  