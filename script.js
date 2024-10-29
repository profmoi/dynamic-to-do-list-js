// Run the code once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a task to the list
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add an event listener to the remove button to delete the task
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item and add the item to the task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for the "Add Task" button click
  addButton.addEventListener("click", addTask);

  // Event listener to allow adding tasks with the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
