let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all"){

const taskList = document.getElementById("taskList");

taskList.innerHTML = "";

let filteredTasks = tasks;

if(filter === "active"){
filteredTasks = tasks.filter(task => !task.completed);
}

if(filter === "completed"){
filteredTasks = tasks.filter(task => task.completed);
}

filteredTasks.forEach((task, index) => {

const li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleTask(${index})">
${task.text}
</span>

<div class="task-buttons">

<button onclick="editTask(${index})">
Edit
</button>

<button onclick="deleteTask(${index})">
Delete
</button>

</div>
`;

taskList.appendChild(li);

});

saveTasks();

}

function addTask(){

const taskInput = document.getElementById("taskInput");

const text = taskInput.value.trim();

if(text === ""){
alert("Enter a task");
return;
}

tasks.push({
text:text,
completed:false
});

taskInput.value = "";

renderTasks();

}

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

renderTasks();

}

function editTask(index){

const newTask = prompt(
"Edit Task",
tasks[index].text
);

if(newTask !== null){

tasks[index].text = newTask;

renderTasks();

}

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

function filterTasks(type){

renderTasks(type);

}

renderTasks();