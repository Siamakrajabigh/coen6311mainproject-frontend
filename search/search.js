
let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');

fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({username:username, myUsername:username})
})
.then(response => response.json())

.then(data => {
  if(data.type === "client"){
   
    const show_Data = document.getElementById('show-service-provider-info');

    const url_show_service_provider = 'https://coen6311-380422.nn.r.appspot.com/showAllServiceProviders'
    
    fetch(url_show_service_provider, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:username})
    })
    .then(response => response.json())
    .then(data => {
      displayServiceProviders(data);
    })       

    function displayServiceProviders(data) {
      let html = '<h4>Available Service Providers:</h4>';
    
      // Check if the data array is empty
      if (data.length === 0) {
        html += '<p>No service providers found.</p>';
      } else {
        data.forEach(item => {
          const fullName = `${item.firstName} ${item.lastName}`;
    
          html += `
            <div class="provider">
              <h5>Name:${fullName}</h5>
              <p>Email:${item.email}</p>
              <p>Skills:</p>
              <ul>`;
    
          item.skills.forEach(skill => {
            html += `<li>${skill.skillTitle}</li>`;
          });
    
          html += `
              </ul>
            </div>
            <hr>
          `;
        });
      }
    
      // Display the generated HTML in a div element with ID "service-providers"
      document.getElementById('show-service-provider-info').innerHTML = html;
    }
    

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
      const inputValue = searchInput.value.split(",").map(skill => skill.trim());
      const data={
        "skills":inputValue,
        "username":username
      }
      console.log(data);
      
      fetch('https://coen6311-380422.nn.r.appspot.com/searchServiceProvidersBySkills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        displayServiceProviders(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });

    function displayServiceProviders(data) {
      let html = '<h4>Available Service Providers:</h4>';
    
      // Check if the data array is empty
      if (data.length === 0) {
        html += '<p>No service providers found.</p>';
      } else {
        data.forEach(item => {
          const fullName = `${item.firstName} ${item.lastName}`;
    
          html += `
            <div class="provider">
              <h5>Name:${fullName}</h5>
              <p>Email:${item.email}</p>
              <p>Skills:</p>
              <ul>`;
    
          item.skills.forEach(skill => {
            html += `<li>${skill.skillTitle}</li>`;
          });
    
          html += `
              </ul>
            </div>
            <hr>
          `;
        });
      }
    
      // Display the generated HTML in a div element with ID "service-providers"
      document.getElementById('show-service-provider-info').innerHTML = html;
    }

  }
  
  else if(data.type==='service provider')
  {
    const dataContainer = document.getElementById('data-container');

    
    fetch('https://coen6311-380422.nn.r.appspot.com/viewAllNonTakenTickets', {
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
      let html = '<h4> Available Tickets</h4>';
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
           window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
        })       
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
        });
      });

    }


    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
      const inputValue = searchInput.value.split(",").map(skill => skill.trim());
      const data={
        "skills":inputValue,
        "username":username
      }
      console.log(data);
      
      fetch('https://coen6311-380422.nn.r.appspot.com/searchTicketsBySkills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        displayTickets(data);
      })
    });

    function displayTickets(data) {
      let html = '';
    
      // Check if the data array is empty
      if (data.length === 0) {
        html += '<p>No such tickets.</p>';
      } else {
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
          if(data != [])
          {
            window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
          }
        })       
            .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
            });
        });
      });
    
      }
    
      // Display the generated HTML in a div element with ID "service-providers"
      
    }

    document.getElementById('data-container').innerHTML = html;
  }
  else{
    alert('Nothing')
  }
})


