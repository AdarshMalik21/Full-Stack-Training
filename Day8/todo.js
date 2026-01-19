

const STORAGE_KEY = "todoTasks";

let tasks = [];



const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const addTaskBtn = document.getElementById("addTaskBtn");

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");



init();

function init() {
    loadTasksFromStorage();
    renderTasks();
}



addTaskBtn.addEventListener("click", addTask);



function addTask() {
    const text = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (text === "") {
        alert("Task cannot be empty");
        return;
    }

    const newTask = {
        id: Date.now(),
        text,
        dueDate,
        completed: false
    };

    tasks.push(newTask);
    saveTasksToStorage();
    renderTasks();
    clearInputs();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );

    saveTasksToStorage();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasksToStorage();
    renderTasks();
}



function renderTasks() {
    pendingList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.id = task.id;

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        const dueDate = document.createElement("span");
        dueDate.textContent = task.dueDate || "No date";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Done";
        completeBtn.className = "complete-btn";
        completeBtn.addEventListener("click", () => toggleTask(task.id));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.append(taskText, dueDate, completeBtn, deleteBtn);

        if (isOverdue(task)) {
            li.classList.add("overdue");
        }

        if (task.completed) {
            completedList.appendChild(li);
        } else {
            pendingList.appendChild(li);
        }
    });
}



function saveTasksToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
}





function clearInputs() {
    taskInput.value = "";
    dueDateInput.value = "";
}

function isOverdue(task) {
    if (!task.dueDate || task.completed) return false;

    const today = new Date().setHours(0, 0, 0, 0);
    const taskDate = new Date(task.dueDate).setHours(0, 0, 0, 0);

    return taskDate < today;
}
