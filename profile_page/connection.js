// fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
//       .then(response => response.json())
//       .then(json => console.log(json))

var data = {

"email" : "shubha.sbj@gmail.com"
};

const url = 'https://coen6311-380422.nn.r.appspot.com/FindAUser'

fetch(url, {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => console.log(response.status) || response) // output the status and return response
.then(response => response.text()) // send response body to next then chain
.then(body => console.log(body)) // you can use response body here

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

function displayresponse(response)
{
  const apiDataElement = document.getElementById('serviceprovider-info');
      // Create a list item for the name and email
      const li = document.createElement('li');
      li.innerHTML = `Name: ${response.username}<br>Email: ${response.email}<br>skills: ${response.skills}<br>category: ${response.categories}`;
      apiDataElement.appendChild(li);

}
