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
    
    