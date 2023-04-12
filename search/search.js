let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');

var data = {

    "email" : "shubha.sbj@gmail.com"
    };
    
    const dataContainer = document.getElementById('data-container');

    const url = 'https://coen6311-380422.nn.r.appspot.com/viewAllTickets'
    
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



//     const dataContainer = document.getElementById('data-container');

//     fetch('https://coen6311-380422.nn.r.appspot.com/viewAllTickets')
//   .then(response => response.json())
//   .then(data => {
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
//           <li>Ticket Number: ${item.ticketNumber}</li>
//           <li>End Users: ${item.endUsers.map(user => user.username).join(', ')}</li>
//         </ul>
//       `;
//     });
//     console.log(data);
//     dataContainer.innerHTML = html;
//   })
//   .catch(error => console.error(error));




    function displayTickets(data)
    {
        //console.log(data);
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
              <li>Ticket Number: ${item.ticketNumber}</li>
              <li>End Users: ${item.endUsers.map(user => user.username).join(', ')}</li>
              <li><button class="edit-button" data-id="${item.id}">Accept Ticket</button></li>
            </ul>
          `;
        });
        console.log(data);
        
        dataContainer.innerHTML = html;
    }