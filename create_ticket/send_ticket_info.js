let username = localStorage.getItem('username');
let userEmail = localStorage.getItem('userEmail');
const form = document.getElementById("apiForm");
    const endpoint = "https://coen6311-380422.nn.r.appspot.com/createNewServiceRequestForEndUser";

    form.addEventListener("submit", event => {
      event.preventDefault();

      const data = {
        "taskType": form.taskType.value,
        "requirementDescriptions": form.requirementDescriptions.value,
        "technicalConstraints": form.technicalConstraints.value,
        "deliveryTime": form.deliveryTime.value,
        "username": username,
        "requiredSkills": form.requiredSkills.value.split(","),
        "categories": [{ categoryName: form.categoryName.value }]
      };
      console.log(data);
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log("API response:", data);
        })
        .catch(error => {
          console.error("Error sending data:", error);
        });
    });