const form = document.getElementById("apiForm");
    const endpoint = "https://coen6311-380422.nn.r.appspot.com/createNewServiceRequestForEndUser";

    form.addEventListener("submit", event => {
      event.preventDefault();

      const data = {
        "username": form.username.value,
        "skills": form.requiredSkills.value.split(",")
      };

    fetch("https://coen6311-380422.nn.r.appspot.com/updateServiceProviderSkills", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
  
    })
    .then(response => response.json())
        .then(data => {
          console.log("API response:", data);
          window.location.href = "https://www.greengrassfreelancer.com/profile_page/index.html";
        })
        .catch(error => {
          console.error("Error sending data:", error);
        });
      });
    
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
    