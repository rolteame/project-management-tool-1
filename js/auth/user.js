var preventDisplay = document.getElementById("Register");
if (preventDisplay) {
  preventDisplay.addEventListener("click", (e) => {
    //prevent window reload
    e.preventDefault();
  });
}

users = JSON.parse(localStorage.getItem("users"));

if (users == null || users == undefined) {
  users = [];
}
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
      newUser = {
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

      localStorage.setItem("users", JSON.stringify(users));

      location.href = "/views/dashboard/Dashboard.html";
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

// token in input
function login() {
  let userEmail = document.getElementById("loginEmail").value;
  let userPassword = document.getElementById("loginPassword").value;

  let userExist = users.find((user) => userEmail == user.email);
  let passwordExist = users.find((user) => userPassword === user.password);

  if (userExist && passwordExist) {
    location.href = "../views/dashboard/Dashboard.html";
  } else {
    alert("Wrong Email and Password");
  }
}

function getImage() {}
