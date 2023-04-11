// fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
//       .then(response => response.json())
//       .then(json => console.log(json))

function getUserDataByEmail(userEmail) {
  let requestBody = {
    'email': userEmail
  };
  const url = 'https://coen6311-380422.nn.r.appspot.com/findAUser'

  fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
  })
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
}

function displayData(data) {
    // Get the HTML element with the ID 'api-data'
    const apiDataElement = document.getElementById('personal-info');
  
    // Create a list item for the name and email
    const li = document.createElement('li');
    const fullName = `${data.firstName} ${data.lastName}`;
    li.innerHTML = `Name: ${fullName}<br>Email: ${data.email}`;
    apiDataElement.appendChild(li);
  }


function getUserDataByUsername(userName) {
  fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({username:'sb12'})
  })
  .then(response => response.json())
  
  .then(data => {
    displayresponse(data);
  })
}
  
  
function displayresponse(data) {
  const apiDataElement = document.getElementById('serviceprovider-info');
      // Create a list item for the name and email
      const li = document.createElement('li');
      li.innerHTML = `Name: ${data.username}<br>skills: ${data.skills}`;
      apiDataElement.appendChild(li);

}
