var preventDisplay = document.getElementById("Register");
if (preventDisplay) {
  preventDisplay.addEventListener("click", (e) => {
    //prevent window reload
    e.preventDefault();
  });
}
// token sytem
var tokeniser = document.getElementById("Token");
var token = {
  token: "eHAiOjE1ODA0NTU3Nzd9.i3rOwqV1Bc-JEAaxT7lHZHUlDuFf9ADVP7qjy50WqT0",
};

// user array
var userExist = new Object();
var users = JSON.parse(localStorage.getItem("users"));

if (users == null || users == undefined) {
  users = [];
}
var saveDetails = JSON.parse(localStorage.getItem("saveDetails"));

if (saveDetails == null || saveDetails == undefined) {
  saveDetails = [];
}

// redirect locations
var dasboardHome = "../views/dashboard/temp.html";
var indexPage = "../../../index.html";

// activeUser
var activeUsers = JSON.parse(localStorage.getItem("activeUsers"));

if (activeUsers == null || activeUsers == undefined) {
  activeUsers = [];
}

var passId = 0;
var passEmail = "";
var passWord = "";
/**
 * Registers a particular user
 */
function register() {
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  let userConfirmPassword = document.getElementById("retypePassword").value;

  // get user email
  let userExist = users.find((user) => user.email == userEmail);

  console.log(userExist);
  // check if email already exists
  if (userExist == undefined || userExist == null) {
    // check if password matches
    if (userPassword === userConfirmPassword) {
      let userId;
      for (let i = 0; i <= users.length; i++) {
        userId = i;
      }

      newUser = {
        id: userId,
        firstName: "",
        lastName: "",
        image: "",
        email: userEmail,
        password: userPassword,
        role: "",
      };

      userEmail = passEmail;
      userId = passId;
      userPassword = password;
      //userExist.map();

      //console.log(newUser);

      users.push(newUser);
      activeUsers.push(token);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("activeUsers", JSON.stringify(activeUsers));
      localStorage.setItem("saveDetails", JSON.stringify(activeUsers));

      location.href = dasboardHome;
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      location.href = "../views/step2.html";
    } else {
      alertBox("signupAlert", "danger", "!password mismatch");
    }
  } else {
    alertBox("signupAlert", "danger", "!user already exist");
  }
}

function continueSignup() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let role = document.getElementById("role").value;

  let addedUser = users.find((user) => user.email == passEmail);

  addedUser = {
    id: saveDetails.id,
    firstName: firstName,
    lastName: lastName,
    image: "",
    email: saveDetails.email,
    password: saveDetails.password,
    role: role,
  };
  getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
  getCurrentUser[saveDetails.id] = addedUser;

  localStorage.setItem("users", JSON.stringify(getCurrentUser));

  localStorage.setItem("currentUser", JSON.stringify(addedUser));
  location.href = dasboardHome;
  localStorage.removeItem("saveDetails");
}
// email
// password
// role
// firstname
// lastname

/**
 * logs a registered user in
 */
function login() {
  var userEmail = document.getElementById("loginEmail").value;
  let userPassword = document.getElementById("loginPassword").value;

  userExist = users.find((user) => userEmail == user.email);
  let passwordExist = users.find((user) => userPassword === user.password);

  if (userExist && passwordExist) {
    activeUsers.push(token);
    localStorage.setItem("activeUsers", JSON.stringify(activeUsers));

    localStorage.setItem("currentUser", JSON.stringify(userExist));
    location.href = "../views/dashboard/temp.html";
  } else {
    let error = "!Wrong Email and/or Password";
    alertBox("loginAlert", "danger", error);
  }
}

function getImage() {}

/**
 * logs out a registered user
 */
function logout() {
  activeUsers.pop();
  localStorage.setItem("activeUsers", JSON.stringify(activeUsers));

  localStorage.removeItem("currentTask");
  localStorage.removeItem("currentProject");
  localStorage.removeItem("currentUser");

  location.href = "../signup.html";
}

/**
 *
 * @param {string} alert_id Div Id of alert box
 * @param {string} alert_type type of alert to show
 * @param {string} alert_message message to display
 * @example alertBox("alert_id", "danger", "danger alert")
 */
function alertBox(alert_id, alert_type, alert_message) {
  alerts = document.getElementById(alert_id);
  if (alerts != null) {
    alerts.innerHTML = alert_message;
  }
  alerts.classList.add(`alert-${alert_type}`);
}

var userName = document.getElementById("userName");
var userRole = document.getElementById("userRole");

// document.onload = () => {
getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(getCurrentUser);
// };
