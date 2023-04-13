
    
let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');
    const showTicket = document.getElementById('show-my-non-taken-tickets');

    const url = 'https://coen6311-380422.nn.r.appspot.com/viewEndUserTickets'
    
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            myUsername: username,
            usernameOfEndUser:username })

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
          const statusVal = item.status;
          if(statusVal != `completed`)
          {
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
          }
        });
        showTicket.innerHTML = html;
    }

    //completed tickets
    
    fetch('https://coen6311-380422.nn.r.appspot.com/viewEndUserTickets', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            myUsername: username,
            usernameOfEndUser:username })

    })
    .then(response => response.json())
    .then(data => {
        displayCompletedTickets(data);
    })       

    function displayCompletedTickets(data)
    {
      const showTicketC = document.getElementById('show-completed-tickets');
        console.log(data);
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
                <li><b>Status:</b> ${item.status}</li>
                <li><input id="rate" name="categoryName" class="form-control" placeholder="Rate your Service Provider" required></li>
                <li><button class="rate-button" data-id="${item.id}">Rate your service</button></li>
            </ul>
          `;
        }

        showTicketC.innerHTML = html;
    
    
      // Add event listener to the Accept Ticket buttons
      const rateButtons = document.querySelectorAll('.rate-button');

      
      rateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const rateInput = document.getElementById("rate");
            const rateValue = rateInput.value;
            console.log(rateValue)
            const serviceProviderName = item.usernameOfProvider;
            console.log(serviceProviderName)
          fetch(`https://coen6311-380422.nn.r.appspot.com/rateAServiceProvider`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:username, serviceProviderUsername:serviceProviderName,rate:rateValue})
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert('12')
           window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
        })       
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
        });
      });
    });
    }

  








    // show personal information
    fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:username,
            myUsername:username
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

