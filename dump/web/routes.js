var activeContent = document.activeElement.id;
var home = document.getElementById("home");

active = localStorage.getItem("active");
if (active == "" || active == null) {
  active = new Object();
}

/**
 * Dynamically displays dashboad content on the dom
 *
 * @param {string} id_name
 */
const dynamicDisplay = (id_name) => {
  document.getElementById(id_name).setAttribute("active", "");
};

document.addEventListener("click", dynamicDisplay("activites_app"));
// home.addEventListener("click", dynamicDisplay("settings_app"));
document.addEventListener("click", dynamicDisplay("home_app"));
document.addEventListener("click", dynamicDisplay("newProject_app"));

if (location.reload()) {
  document.addEventListener("click", dynamicDisplay("home_app"));
}

// if (document.hasAttribute("active")) {
//   console.log("active");
// }

// newFunction();
// function newFunction() {
//   document.addEventListener("click", (e) => {
//     // console.log(e.target);
//     fetch("https://jsonplaceholder.typicode.com/postses")
//       .then(function (response) {
//         // The API call was successful!
//         return response.json();
//       })
//       .then(function (data) {
//         // This is the JSON from our response
//         console.log(data);
//       })
//       .catch(function (err) {
//         // There was an error
//         console.warn("Something went wrong.", err);
//       });
//   });
// }
