// fetch('https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider')
//       .then(response => response.json())
//       .then(json => console.log(json))

const data = {

    "email" : "shubhha.sbj@gmail.com"
    };
    
    const url = 'https://coen6311-380422.nn.r.appspot.com/updateServiceProviderSkills'
    
    let submitRegisterForm = function() 
    {
        // create an array of skills by splitting the input string by comma
        const skills = document.getElementById('skills').value.split(','); 
        const data = {
          "username": document.getElementById('username').value,
          "skills": skills
        };

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
        li.innerHTML = `Skills: ${data.skills}<br> Category: ${data.categories}`
        apiDataElement.appendChild(li);
      }

    }
    