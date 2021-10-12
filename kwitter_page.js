//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDfufjJj_rPvtVqsTyjk3scqbI6wMKjv_c",
  authDomain: "kwitter-project-7bc4d.firebaseapp.com",
  databaseURL: "https://kwitter-project-7bc4d-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-7bc4d",
  storageBucket: "kwitter-project-7bc4d.appspot.com",
  messagingSenderId: "350036597528",
  appId: "1:350036597528:web:bfd55b1208b88953ba5c6d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
}
