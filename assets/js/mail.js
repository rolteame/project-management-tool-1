var preventDisplay = document.getElementById("submit_email");
if (preventDisplay) {
  preventDisplay.addEventListener("click", (e) => {
    //prevent window reload
    e.preventDefault();
  });
}

var users = JSON.parse(localStorage.getItem("users"));

if (users == null || users == undefined) {
  users = [];
}
// function sendRequestEmail() {
  let recipient = document.getElementById("email_address").value
  if (recipient == null) {}
    let styling = `
    body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      .container {
        /* max-width: 960px; */
        height: 55vh;
        width: 80%;
        padding-bottom: 43px;
        margin: 10px auto;
      }
      .logo {
        max-height: 15px;
        padding: 10px;
        display: flex;
        margin: 3rem;
        justify-content: center;
        align-items: center;
        font-size: 28px;
      }
      .text-primary {
        color: #0099cc;
        padding-left: 1rem;
      }
      h3,
      p {
        text-align: center;
      }
      .logo a {
        text-decoration: none;
        color: white;
        background: #0099cc;
        padding: 1rem 3rem;
        border-radius: 5px;
        text-align: center;
        margin: 0 auto;
        font-size: 16px;
      }
      a:hover {
        background-color: #09abe0;
      }
      small {
        text-align: center;
        padding: 10px;
        display: flex;
        margin: 3rem;
        justify-content: center;
        align-items: center;
      }
      
    `
      
 let userAvail = null
  function sendMail()
{
     let userEmail = document.getElementById("email_address").value
    let userExist = users.find((user) => user.email == userEmail);
    let forgot_content = document.getElementById("forgot-section")
    userAvail = userExist
    Swal.fire({
        title: "Verifying email...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 5000,
        didOpen: () => {
          swal.showLoading();
        },
      }).then(()=>{
          if (userExist !== undefined || userExist !== null) {
            let body_child =  `
            <div class="container">
                <!--Header section-->
                <label class="logo"><img src="../../assets/img/Logo.png" class="path"></img><span class="text-primary">BAS</span><l-heading>COM</l-heading></label>  
            
                <h3>Password Reset</h3>
                <p>A password reset has been requested on your account. Please click the link below to verify and change your password</p>
                <div class="container logo">
                    <a target="_blank" href="http://127.0.0.1:5501/views/reset-password.html?email=${userEmail}">Reset Password</a>
                </div>
                <small><span class="text-primary">BAS</span><l-heading>COM</l-heading>&copy;2020</small>
            </div>
            `;
        var newNode = document.createElement('body');
        newNode.innerHTML = body_child

        let style = document.createElement("style")
        style.id = "mail"
        style.innerHTML = styling

        document.head.appendChild(style)
        document.body.replaceWith(newNode)
    }else{
        Swal.fire({
            icon: "error",
            title: "user does not exist",
            showConfirmButton: false,
            timer: 2000,
          });
    }
      })
   
   
}


var preventDisplay = document.getElementById("resetPassword");
if (preventDisplay) {
  preventDisplay.addEventListener("click", (e) => {
    //prevent window reload
    e.preventDefault();
    resetPasswword()
  });
}
function resetPasswword() {
    // document.getElementById("mail").remove()
    let password = document.getElementById("password").value
    let rpassword = document.getElementById("retype_password").value

    if (rpassword !== password) {
        Swal.fire({
            icon: "error",
            title: "password mismatch",
            showConfirmButton: false,
            timer: 2000,
          });
    }else{
        let url = new URL(document.URL)
        let url_param = new URLSearchParams(url.search)
        let email_param = url_param.get("email")

        let userExist = users.find((user) => user.email == email_param);
        let UserIndex = users.indexOf(editUsers);
        if (userExist !== undefined || userExist !== null) {
            let User = {
            id: UserIndex,
            firstName: firstname,
            lastName: lastname,
            image: "",
            email: email,
            password: password,
            role: role,
          };
        
          users.splice(editUserIndex, 1, User);
        localStorage.setItem("users", users)
        }

        
    }
}
  
