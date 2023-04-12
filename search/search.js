
let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');

var data = {

    "email" : "shubha.sbj@gmail.com"
    };
    
    const dataContainer = document.getElementById('data-container');

    const url = 'https://coen6311-380422.nn.r.appspot.com/viewAllNonTakenTickets'
    
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:username})
    })
    .then(response => response.json())
    .then(data => {
        displayTickets(data);
    })       

    function displayTickets(data) {
      let html = '';
      data.forEach(item => {
        html += `
          <ul>
            <li>ID: ${item.id}</li>
            <li>Delivery Time: ${item.deliveryTime}</li>
            <li>Task Type: ${item.taskType}</li>
            <li>Required Skills: ${item.requiredSkills.join(', ')}</li>
            <li>Technical Constraints: ${item.technicalConstraints}</li>
            <li>Requirement Descriptions: ${item.requirementDescriptions}</li>
            <li>End Users: ${item.endUsers.map(user => user.username).join(', ')}</li>
            <li><button class="accept-button" data-id="${item.id}">Accept Ticket</button></li>
          </ul>
        `;
      });
    
      dataContainer.innerHTML = html;
    
      // Add event listener to the Accept Ticket buttons
      const acceptButtons = document.querySelectorAll('.accept-button');
      acceptButtons.forEach(button => {
        button.addEventListener('click', () => {
          const ticketId = button.dataset.id;
          fetch(`https://coen6311-380422.nn.r.appspot.com/acceptTicket`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:username, id:ticketId})
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
           // window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
        })       
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
        });
      });
    }


    // function displayTickets(data)
    // {
    //     //console.log(data);
    //     let html = '';
    //     data.forEach(item => {
    //       html += `
    //         <ul>
    //           <li>ID: ${item.id}</li>
    //           <li>Delivery Time: ${item.deliveryTime}</li>
    //           <li>Task Type: ${item.taskType}</li>
    //           <li>Required Skills: ${item.requiredSkills.join(', ')}</li>
    //           <li>Technical Constraints: ${item.technicalConstraints}</li>
    //           <li>Requirement Descriptions: ${item.requirementDescriptions}</li>
    //           <li>End Users: ${item.endUsers.map(user => user.username).join(', ')}</li>
    //           <li><button class="edit-button" data-id="${item.id}">Accept Ticket</button></li>
    //         </ul>
    //       `;
    //     });
    //     console.log(data);
        
    //     dataContainer.innerHTML = html;
    // }