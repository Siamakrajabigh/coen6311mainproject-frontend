// fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
//       .then(response => response.json())
//       .then(json => console.log(json))

const data = {

"email" : "siamakrajabigh@gmail.com"
};

const url = 'https://coen6311-380422.nn.r.appspot.com/findAUser'

fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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
