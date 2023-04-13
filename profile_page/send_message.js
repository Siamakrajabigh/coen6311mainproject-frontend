document.addEventListener('DOMContentLoaded', function(){
    const sendMessageBtn = document.getElementById("send_message")
    sendMessageBtn.addEventListener("click", event =>{
        window.location.href = "../message_page/index.html"
    })
})