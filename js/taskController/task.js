// USERS LIST GOTTEN FROM LOCAL STORAGE
users = JSON.parse(localStorage.getItem("users"));

// CURRENT USER GOTTEN FROM LOCAL STORAGE
currentUser = JSON.parse(localStorage.getItem("currentUser"));

// PROJECTS LIST GOTTEN FROM LOCAL STORAGE
projects = JSON.parse(localStorage.getItem("projects"));
if (projects == null || projects == undefined) {
  projects = [];
}

// CURRENT USER GOTTEN FROM LOCAL STORAGE
currentProject = JSON.parse(localStorage.getItem("currentProject"));
if (currentProject == null || currentProject == undefined) {
  currentProject = {};
}

// TASKS LIST GOTTEN FROM LOCAL STORAGE
tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks == null || tasks == undefined) {
  tasks = [];
}

function displayTasks() {
  tasksPlaceholder = "";
  if (tasks == null || tasks == undefined) {
    tasks = [];
  }

  for (i = 0; i < tasks.length; i++) {
    task = tasks[i];
    if (task.userId == currentUser.id) {
      if (task.projectId == currentProject.projectId) {
        tasksPlaceholder += `<div class="card w-25 bg-grey m-3 ">   
            <div class="card-header my-0 py-1 bg-grey">
                <h6 class="">${task.taskName}</h6>
                    
            </div>    
            <div class="card-body bg-grey">
                <p>
                ${task.taskBody}
                </p>
                <small class="text-muted my-0 py-0 float-right">
                        <span class="my-0">${task.startDate} </span>
                        <br class="my-0">to <br class="my-0">
                        <span class="my-0">${task.endDate}</span>
                    </small>
            </div>
            <div class="card-footer d-flex justify-content-around px-1 py-1 border-top-0">
                <button class="btn btn-info">Edit</button>
                <button class="btn btn-danger" onclick= "deleteTask(${i})">Delete</button><br>
            </div>
        </div>`;
      }
    }

    document.getElementById("showAllTasks").innerHTML = tasksPlaceholder;
  }
}
 let taskId;
// create a new task
function addTask() {
 

  for (let i = 0; i <= tasks.length; i++) {
    taskId = i;
  }

  newTask = {
    taskId: taskId,
    taskName: document.getElementById("taskName").value,
    taskBody: document.getElementById("taskBody").value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    projectId: currentProject.projectId,
    userId: currentUser.id,
  };

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  location.href = "taskoverview.html";
}

function deleteTask() {
  tasks.splice(taskId, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
  location.reload();
}
