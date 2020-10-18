

// Function to update the user profile
function update(){

    index = document.getElementById('settings-hidden').value

    users = JSON.parse(localStorage.getItem('users'))

    let updatedUser ={
        name:document.getElementById('settings-name').value,
        role:document.getElementById('settings-role').value,
        team:document.getElementById('settings-team').value,
        about:document.getElementById('settings-about').value,
    }

    users[index] = updatedUser

    localStorage.setItem('users', JSON.stringify(users))
    
}