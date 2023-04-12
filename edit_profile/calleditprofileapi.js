let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');

const form = document.getElementById("apiForm");
    const endpoint = "https://coen6311-380422.nn.r.appspot.com/createNewServiceRequestForEndUser";

    form.addEventListener("submit", event => {
      event.preventDefault();

      const data = {
        "username": username,
        "skills": form.requiredSkills.value.split(",")
      };

    fetch("https://coen6311-380422.nn.r.appspot.com/updateServiceProviderSkills", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
  
    })
    .then(response => response.json())
        .then(data => {
          console.log("API response:", data);
          window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
        })
        .catch(error => {
          console.error("Error sending data:", error);
        });
      });
    


var data = {

"email" : "userEmail"
};

const url = 'https://coen6311-380422.nn.r.appspot.com/findAUser'

fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:userEmail})
})
.then(response => response.json())
.then(data => {
  displayData(data);
})

function displayData(data) {
    // Get the HTML element with the ID 'api-data'
    const apiDataElement = document.getElementById('personal-info');
  
    // Create a list item for the name and email
    const li = document.createElement('li');
    const fullName = `${data.firstName} ${data.lastName}`;
    li.innerHTML = `Name: ${fullName}<br>Email: ${data.email}`;
    apiDataElement.appendChild(li);
  }
 
  var data = {

    "username":'username',
    "myUsername": 'username'
  };

    var skills = [
      {id: 1, skillTitle: 'Python'}
    ]; 
  
  fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({username:username, myUsername:username})
  })
  .then(response => response.json())
  
  .then(data =>
    displayServiceProviderInfo(data)
  )
  
  function displayServiceProviderInfo(data) {
    const apiDataElement = document.getElementById('serviceprovider-info');
    console.log(data);
    // Create a list item for the name and email
    const li = document.createElement('li');
    li.innerHTML = `Name: ${data.username}`;
    li.innerHTML = `Skills:`;

    // Create a sub-list for the skills
    const skillsList = document.createElement('ul');
    data.skills.forEach(skill => {
      const skillLi = document.createElement('li');
      skillLi.textContent = skill.skillTitle;
      skillsList.appendChild(skillLi);
    });
    li.appendChild(skillsList);
  
    apiDataElement.appendChild(li);
  }
  
    