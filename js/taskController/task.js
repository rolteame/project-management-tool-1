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

tasksLists = JSON.parse(localStorage.getItem('tasksLists'))
if (tasksLists == null || tasksLists == undefined) {
  tasksLists = [];
}
activeList = JSON.parse(localStorage.getItem('activeList'))
if (activeList == null || activeList == undefined) {
  activeList = {};
}
function displayTasksLists(){
  tasksListsPlaceholder = ""

  for(i = 0; i < tasksLists.length; ++i){
    tasksListsPlaceholder += `
        <div class="card" style="max-width: 25%">
        <div class="card-body">
          <div class="card-header d-flex justify-content-between">
              <span class="card-heading ">${tasksLists[i].name}</span>
              <button data-toggle="modal" value="${tasksLists[i].name}" data-target="#staticBackdrop" class="btn btn-outline-secondary rounded-pill add-btn-color">+ Add Task</button>
          </div>
          <div id="${tasksLists[i].name}">

          </div>
        </div>
      </div>
    `;
  }
  document.getElementById('showLists').innerHTML = tasksListsPlaceholder

  displayTasks()

}

function displayTasks() {
  
  if (tasks == null || tasks == undefined) {
    tasks = [];
  }

  for (j = 0; j < tasksLists.length; ++j){
    tasksPlaceholder = "";
      for (i = 0; i < tasks.length; i++) {
        task = tasks[i];
        if(tasksLists[j].name == task.listName){
        if (task.userId == currentUser.id) {
          if (task.projectId == currentProject.projectId) {  

            tasksPlaceholder += `<div class="card bg-grey m-3 ">   
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
          document.getElementById(tasksLists[j].name).innerHTML = tasksPlaceholder;
        }

      }

}
}

document.getElementById("showLists").addEventListener('click',function(event){
  activeList = {
    "name":event.target.value
  }
  
  localStorage.setItem('activeList', JSON.stringify(activeList))
})

function addList(){
  newList = {
    "name" : document.getElementById('listName').value
  }

  tasksLists.push(newList)
  localStorage.setItem('tasksLists', JSON.stringify(tasksLists))
  displayTasksLists()
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
    listName:activeList.name
  };

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  location.href = "taskoverview.html";
}

function deleteTask(id) {
  tasks.splice(id, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
  location.reload();
}
