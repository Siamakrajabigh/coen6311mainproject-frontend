let sendMessageBtn = document.getElementById("send_message")

sendMessageBtn.addEventListener("submit", event =>{
    const variable = 'example';
    const url = `http://www.example.com/?variable=${variable}`;
    window.location.href = url;
})