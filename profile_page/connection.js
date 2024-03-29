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
    console.log(data);
    // Create a list item for the name and email
    const li = document.createElement('li');
    const fullName = `${data.firstName} ${data.lastName}`;
    li.innerHTML = `Name: ${fullName}<br>Email: ${data.email}<br>Rating: ${data.rate}`;
    apiDataElement.appendChild(li);
  }
 
  var data = {

    "username":'username',
    "myUsername": 'username'
  };

    var skills = [
      {id: 1, skillTitle: 'Python'}
    ]; 


  fetch('https://coen6311-380422.nn.r.appspot.com/viewServiceProviderTickets', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({myUsername:username, usernameOfServiceProvider:username})
})
.then(response => response.json())
.then(data => {
viewAcceptedTickets(data);
console.log(data);
})


function viewAcceptedTickets(data)
{
  console.log(data);
  const showTicket = document.getElementById('show-tickets');
  let html = '';
        data.forEach(item => {
          const statusVal = item.status;
          if(statusVal == `taken`)
          {
          html += `
            <ul>
                <li><b>ID:</b> ${item.id}</li>
                <li><b>Task Type:</b> ${item.taskType}</li>
                <li><b>Requirement Descriptions:</b> ${item.requirementDescriptions}</li>
                <li><b>Required Skills:</b> ${item.requiredSkills.join(', ')}</li>
                <li><b>Technical Constraints:</b> ${item.technicalConstraints}</li>
                <li><b>Delivery Time:</b> ${item.deliveryTime}</li>
                <li><button class="Complete-button" data-id="${item.id}">Job Completed</button></li>
            </ul>
          `;
        }
        });
        showTicket.innerHTML = html;
    
// Add event listener to the Accept Ticket buttons
const completeButtons = document.querySelectorAll('.Complete-button');
completeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const ticketId = button.dataset.id;
    fetch(`https://coen6311-380422.nn.r.appspot.com/completeATicket`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:username, id:ticketId})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
     window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
  })       
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
});
}

fetch('https://coen6311-380422.nn.r.appspot.com/viewServiceProviderTickets', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({myUsername:username, usernameOfServiceProvider:username})
})
.then(response => response.json())
.then(data => {
  viewCompletedTickets(data);
})


function viewCompletedTickets(data)
{
  const showTicketC = document.getElementById('show-completed-tickets');
  let html = '';
        data.forEach(item => {
          const statusVal = item.status;
          if(statusVal == `completed`)
          {
          html += `
            <ul>
                <li><b>ID:</b> ${item.id}</li>
                <li><b>Task Type:</b> ${item.taskType}</li>
                <li><b>Requirement Descriptions:</b> ${item.requirementDescriptions}</li>
                <li><b>Required Skills:</b> ${item.requiredSkills.join(', ')}</li>
                <li><b>Technical Constraints:</b> ${item.technicalConstraints}</li>
                <li><b>Delivery Time:</b> ${item.deliveryTime}</li>
            </ul>
          `;
        }
        });
        showTicketC.innerHTML = html;
}

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

const sendInvitationBtn = document.getElementById('sendInvitationBtn');
sendInvitationBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('emailInput').value;
  console.log(email);
  const url = 'https://coen6311-380422.nn.r.appspot.com/invitation';
  const data= {

    "recipientEmail":email,
        "username":username
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
;