// script.js - Dynamic To-Do List Application with Local Storage
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.classList.add('remove-btn');


// Remove task from DOM and update localStorage
removeBtn.onclick = function () {
const index = tasks.indexOf(taskText);
if (index > -1) {
tasks.splice(index, 1);
saveTasks();
}
taskList.removeChild(li);
};


li.appendChild(removeBtn);
taskList.appendChild(li);


// Persist task if requested
if (save) {
tasks.push(taskText);
saveTasks();
}


// Clear and focus input
taskInput.value = '';
taskInput.focus();



// Load tasks from localStorage and render them
function loadTasks() {
const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
tasks = Array.isArray(stored) ? stored : [];
tasks.forEach(t => addTask(t, false));
}


// Attach event listener to the Add Task button
addButton.addEventListener('click', function () { addTask(); });


// Allow adding tasks by pressing Enter in the input field
taskInput.addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
addTask();
}
});


// Initialize by loading existing tasks from localStorage
loadTasks();
;// script.js - Dynamic To-Do List Application with Local Storage
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.classList.add('remove-btn');


// Remove task from DOM and update localStorage
removeBtn.onclick = function () {
const index = tasks.indexOf(taskText);
if (index > -1) {
tasks.splice(index, 1);
saveTasks();
}
taskList.removeChild(li);
};


li.appendChild(removeBtn);
taskList.appendChild(li);


// Persist task if requested
if (save) {
tasks.push(taskText);
saveTasks();
}


// Clear and focus input
taskInput.value = '';
taskInput.focus();



// Load tasks from localStorage and render them
function loadTasks() {
const stored = JSON.parse(localStorage.getItem('tasks') || '[]');
tasks = Array.isArray(stored) ? stored : [];
tasks.forEach(t => addTask(t, false));
}


// Attach event listener to the Add Task button
addButton.addEventListener('click', function () { addTask(); });


// Allow adding tasks by pressing Enter in the input field
taskInput.addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
addTask();
}
});


// Initialize by loading existing tasks from localStorage
loadTasks();
;
