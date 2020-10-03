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

// redirect locations
var dasboardHome = "../views/dashboard/temp.html";
var indexPage = "../../../index.html";

// activeUser
var activeUsers = JSON.parse(localStorage.getItem("activeUsers"));

if (activeUsers == null || activeUsers == undefined) {
  activeUsers = [];
}
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
        role: "casual",
      };

      //userExist.map();

      //console.log(newUser);

      users.push(newUser);
      activeUsers.push(token);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("activeUsers", JSON.stringify(activeUsers));

      location.href = dasboardHome;
    } else {
      alert("password mismatch");
    }
  } else {
    alert("user already exist");
  }
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

    location.href = dasboardHome;
  } else {
    alert("Wrong Email and/or Password");
  }
}

function getImage() {}

/**
 * logs out a registered user
 */
function logout() {
  activeUsers.pop();
  localStorage.setItem("activeUsers", JSON.stringify(activeUsers));

  location.href = indexPage;
}
