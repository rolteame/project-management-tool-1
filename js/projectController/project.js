let projects = JSON.parse(localStorage.getItem("projects"));

if (projects == null || projects == undefined) {
  projects = [];
}

function createProject(event) {
  const newProject = {
    name: document.getElementById("project-name"),
    description: getElementById("project-description"),
  };

  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));
  location.href = "/views/dashboard/home.html";
}

function displayPage() {}
