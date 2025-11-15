// TODO LIST FUNCTIONALITY
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create task element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create buttons
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔";
    completeBtn.classList.add("task-btn", "complete-btn");
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "✖";
    deleteBtn.classList.add("task-btn", "delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
});

// Allow enter key to add task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
