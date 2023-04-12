
let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');
const url = 'https://coen6311-380422.nn.r.appspot.com/admin/report'
const dataContainer = document.getElementById('see-acitivity');

    
fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({username:username})
})
.then(response => response.json())
.then(data => {
    displayAcivities(data);
}) 


function displayAcivities(data)
{
    //console.log(data);
    let html = '';
    data.forEach(item => {
      html += `
        <ul>
          <li>Action: ${item.action}</li>
          <li>Details: ${item.details}</li>
          <li>TimeStamp: ${item.timestamp}</li>
        </ul>
      `;
    });
    console.log(data);
    
    dataContainer.innerHTML = html;
}