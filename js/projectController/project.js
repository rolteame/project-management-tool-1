users = JSON.parse(localStorage.getItem("users"));

projects = JSON.parse(localStorage.getItem("projects"));
if (projects == null || projects == undefined) {
  projects = [];
}

function displayProjects() {}
function addProjects(id) {
  let projectId;
  for (let i = 0; i <= projects.length; i++) {
    projectId = i;
  }
  newProject = {
    projectId: projectId,
    projectName: document.getElementById("projectName").value,
    projectDescription: document.getElementById("projectDescription").value,
    userId: id,
  };

  projects.push(newProject);
  localStorage.setItem("projectsDetails", project);
}
