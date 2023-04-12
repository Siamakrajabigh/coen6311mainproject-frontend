// fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
//       .then(response => response.json())
//       .then(json => console.log(json))
let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');

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
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  
  .then(data =>
    console.log(data)
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
  
  


function displayresponse(data)
{
  
  
  const apiDataElement = document.getElementById('serviceprovider-info');
      // Create a list item for the name and email
      const li = document.createElement('li');
      li.innerHTML = `Name: ${data.username}<br>skills: ${data.skills}`;
      apiDataElement.appendChild(li);

}
