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

// Display all projects of current user
function displayProjects() {
  projectsPlaceholder = "";

  if (projects == null || projects == undefined) {
    projects = [];
  }

  for (i = 0; i < projects.length; i++) {
    project = projects[i];
    if (project.userId == currentUser.id) {
      projectsPlaceholder += `<div onclick={openProject(${project.projectId})}>       
             ${project.projectName}<br>
        </div>`;
    }
    document.getElementById("showAllProjects").innerHTML = projectsPlaceholder;
  }
}

// creates new projects
function addProject() {
  let projectId;

  for (let i = 0; i <= projects.length; i++) {
    projectId = i;
  }

  newProject = {
    projectId: projectId,
    projectName: document.getElementById("projectName").value,
    projectDescription: document.getElementById("projectDescription").value,
    userId: currentUser.id,
  };

  projects.push(newProject);

  localStorage.setItem("projects", JSON.stringify(projects));
  currentProject = localStorage.setItem(
    "currentProject",
    JSON.stringify(newProject)
  );

  location.href = "projects.html";
}

// Open selected project
function openProject(id) {
  localStorage.setItem("currentProject", JSON.stringify(projects[id]));

  location.href = "overview.html";
}
