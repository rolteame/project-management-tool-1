// USERS LIST GOTTEN FROM LOCAL STORAGE
users = JSON.parse(localStorage.getItem('users'));

// CURRENT USER GOTTEN FROM LOCAL STORAGE
currentUser = JSON.parse(localStorage.getItem('currentUser'))

// PROJECTS LIST GOTTEN FROM LOCAL STORAGE
projects = JSON.parse(localStorage.getItem('projects'));
if(projects == null || projects == undefined) {
    projects = [];
}

// CURRENT USER GOTTEN FROM LOCAL STORAGE
currentProject = JSON.parse(localStorage.getItem('currentProject'))
if(currentProject == null || currentProject == undefined) {
    currentProject = {};
}

// TASKS LIST GOTTEN FROM LOCAL STORAGE
tasks = JSON.parse(localStorage.getItem('tasks'))
if(tasks == null || tasks == undefined) {
    tasks = [];
}

function displayTasks(){
    tasksPlaceholder = ''
    if(tasks == null || tasks == undefined){
        tasks = []
    }

    for (i=0;i <tasks.length;i++){
        task = tasks[i]
        if(task.userId == currentUser.id){
            if(task.projectId == currentProject.projectId){
            tasksPlaceholder +=`<div>       
             ${task.taskName} <button>Edit</button><button onclick= "deleteTask(${i})">Delete</button><br>
        </div>`}
        }

        document.getElementById('showAllTasks').innerHTML = tasksPlaceholder
    }
}

// create a new task
function addTask() {
    let taskId;
    
    for(let i = 0; i <= tasks.length; i++) {
        taskId = i;
    }

    newTask = {
        taskId:taskId,
        taskName : document.getElementById('taskName').value,
        taskBody : document.getElementById('taskBody').value,
        projectId: currentProject.projectId,
        userId : currentUser.id
    }

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks))


    location.href = "overview.html"
}

function deleteTask(id){

    tasks.splice(id,1)

    localStorage.setItem('tasks', JSON.stringify(tasks))
    displayTasks()
}