
    
    const showTicket = document.getElementById('show-tickets');

    const url = 'https://coen6311-380422.nn.r.appspot.com/viewEndUserTickets'
    
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            myUsername: 'Rashel',
            usernameOfEndUser:'Rashel' })

    })
    .then(response => response.json())
    .then(data => {
        displayTickets(data);
    })       

    function displayTickets(data)
    {
        //console.log(data);
        let html = '';
        data.forEach(item => {
          html += `
            <ul>
                <li><b>ID:</b> ${item.id}</li>
                <li><b>Task Type:</b> ${item.taskType}</li>
                <li><b>Requirement Descriptions:</b> ${item.requirementDescriptions}</li>
                <li><b>Required Skills:</b> ${item.requiredSkills.join(', ')}</li>
                <li><b>Technical Constraints:</b> ${item.technicalConstraints}</li>
                <li><b>Delivery Time:</b> ${item.deliveryTime}</li>
                <li><b>Status:</b> ${item.status}</li>
            </ul>
          `;
        });
        showTicket.innerHTML = html;
    }

    // show personal information
    fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:'Rashel',
            myUsername:'Rashel'
    })
      })
      .then(response => response.json())
      
      .then(data => {
        displayPersonalInformation(data);
      })
      function displayPersonalInformation(data) {
        // Get the HTML element with the ID 'api-data'
        const personalInfo = document.getElementById('personal-info');
        const fullName = `${data.firstName} ${data.lastName}`;
        let html= '';

        html += `
            <ul>
                <li><b>Name:</b> ${fullName}</li>
                <li><b>User Name:</b> ${data.username}</li>
                <li><b>Email:</b> ${data.email}</li>
            </ul>
          `;
          personalInfo.innerHTML = html;

 }    
// send email inviation 
const sendInvitationBtn = document.getElementById('sendInvitationBtn');
sendInvitationBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  console.log(email);
  const url = 'https://coen6311-380422.nn.r.appspot.com/invitation';
  const data= {

    "recipientEmail":email,
        "username":"Rashel"
     }
     console.log(data)
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)}
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Do something with the response data
    })
    .catch(error => console.log(error));
});

