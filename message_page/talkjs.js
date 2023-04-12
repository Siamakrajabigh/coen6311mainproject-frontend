//let username = localStorage.getItem('username');
let username = "SB1"
let userEmail = localStorage.getItem('userEmail');
fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:username,
            myUsername:username
    })
      }).then(response => response.json())
      
      .then(data => {
        func(data);
      })
function func(data){
  fetch('https://coen6311-380422.nn.r.appspot.com/findUserByUsername', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:'Rashel111',
            myUsername:'Rashel111'
    })
      }).then(response => response.json())
      
      .then(data2 => {
        func2(data2, data);
      })
}

function func2(data2, data){
  talkjs(data, data2)
}

function talkjs(data, data2) {
  console.log(data)
  console.log(data2)
  var me = new Talk.User({
    id: data2.id,
    name: data2.username,
    email: data2.email,
    photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
  });
  window.talkSession = new Talk.Session({
    appId: 'tz1KGCvj',
    me: me,
  });
  var other = new Talk.User({
    id: data.id,
    name: data.username,
    email: data.email,
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
