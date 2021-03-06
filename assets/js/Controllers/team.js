// CURRENT USER GOTTEN FROM LOCAL STORAGE
currentUser = JSON.parse(localStorage.getItem("currentUser"));

// USERS LIST GOTTEN FROM LOCAL STORAGE
users = JSON.parse(localStorage.getItem("users"));

// TEAMS LIST GOTTEN FROM LOCAL STORAGE
teams = JSON.parse(localStorage.getItem("teams"));
if (teams == null || teams == undefined) {
  teams = [];
}

// ##############################[   funtion displayUsers begins here   ]##################################
// FUNCTION TO DISPLAY USERS ON TEAMS PAGE
function displayUsers() {
  usersPlaceholder = "";

  for (i = 0; i < users.length; ++i) {
    usersPlaceholder += `
            <option id="${i}" onclick="addUp(event)" value="${users[i].firstName}">${users[i].firstName} ${users[i].lastName}</option>
        `;
  }
  document.getElementById("usersList").innerHTML = usersPlaceholder;
}

$("#createTeam").on("shown.bs.modal", function () {
  displayUsers();
});
//##############################[ Function Display Users Ends Here  ] ########################################

// function listSelected(){
//     console.log(document.getElementById("usersList").value)
//     // selectedValue = []
//     // selectedValue.push(document.getElementById(id).value)
//     // usersPlaceholder = `<div>
//     //                         ${document.getElementById(id).value}
//     //                     </div>`;

//     // document.getElementById('showSelected').append(usersPlaceholder)
// }

// SELECTS div of selected users for team
teamDisplayDiv = document.getElementById("showSelected");

//#####################[ Function addUp begins here ]#############################
// appends users to div to add to team. Called in displayUsers function above
function addUp(e) {
  displayDivChildren = teamDisplayDiv.children;
  console.log(displayDivChildren);
  // console.log(e.target.selected,e.target.value)
  if (e.target.selected == true) {
    innerDiv = document.createElement("div");
    innerDiv.classList.add("badge");
    innerDiv.classList.add("badge-secondary");
    innerDiv.classList.add("m-2");
    button = document.createElement("button");
    button.innerHTML = "X";
    button.classList.add("badge");
    button.classList.add("badge-danger");
    button.classList.add("text-white");
    button.classList.add("font-weight-bold");
    button.classList.add("border-0");
    button.classList.add("ml-1");

    button.onclick = function (e) {
      this.parentElement.parentElement.removeChild(this.parentElement);
    };
    innerDiv.append(e.target.value);
    innerDiv.append(button);
    innerDiv.id = e.target.id;
    teamDisplayDiv.appendChild(innerDiv);
  }
}
{
  /* <div class="badge badge-primary">
                    Maxwell <button class="badge badge-danger text-white text-center font-weight-bold border-0">X</button>
                    <span class="sr-only">unread messages</span>
                  </div> */
}
// #############[     Function addUp ends Here ]###############################################

// #############[     Function createTeam begins Here ]###############################################
// It is called in team.html
let teamId;
function createTeam() {
  for (let i = 0; i <= teams.length; i++) {
    teamId = i;
  }

  teamDisplayDiv = document.getElementById("showSelected");
  displayDivChildren = teamDisplayDiv.children;
  teamName = document.getElementById("teamName").value;
  teamList = [];

  for (i = 0; i < displayDivChildren.length; ++i) {
    teamList.push(displayDivChildren[i].id);
    users[displayDivChildren[i].id].teamIdList.push(teamId);
  }

  let newTeam = {
    teamId: teamId,
    teamName: teamName,
    userIdList: teamList,
  };

  teams.push(newTeam);
  localStorage.setItem("teams", JSON.stringify(teams));
  localStorage.setItem("users", JSON.stringify(users));
  location.href = "temp.html";
}
// #############[     Function createTeam ends Here   ]###############################################
teamTable = [
  {
    teamID: 0,
  },
];
