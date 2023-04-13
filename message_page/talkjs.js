let myUsername = localStorage.getItem('username');
let theirUsername = myUsername
let userEmail = localStorage.getItem('userEmail');
function startChat(myUsername, theirUsername = null){
fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:myUsername,
            myUsername:myUsername
    })
      }).then(response => response.json())
      
      .then(myData => {
        func(myData);
      })
function func(myData){
  fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:theirUsername,
            myUsername:theirUsername
    })
      }).then(response => response.json())
      
      .then(theirData => {
        talkjs(myData, theirData);
      })
}

function talkjs(myData, theirData) {
  console.log(myData)
  console.log(theirData)
  var me = new Talk.User({
    id: theirData.id,
    name: theirData.username,
    email: theirData.email,
    photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
  });
  window.talkSession = new Talk.Session({
    appId: 'tz1KGCvj',
    me: me,
  });
  var other = new Talk.User({
    id: myData.id,
    name: myData.username,
    email: myData.email,
    photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  var inbox = talkSession.createInbox({ selected: conversation });
  inbox.mount(document.getElementById('talkjs-container'));
}

Talk.ready.then(function() {
  talkjs(myChatID, myChatName, myChatEmail, myChatPhotoUrl);
});
}
startChat(myUsername, theirUsername)
    function storeText() {
      const inputElement = document.getElementById('text-input');
      theirUsername = inputElement.value;
      startChat(myUsername, theirUsername)
    }

    document.addEventListener('DOMContentLoaded', function () {
      const storeTextButton = document.getElementById('message-button');
      storeTextButton.addEventListener('click', storeText);
    });
    document.addEventListener('DOMContentLoaded', function(){
      const backButton = document.getElementById('back-button');
      backButton.addEventListener('click', function(){
        window.location.href = '../profile_page/index.html'
      })
    })