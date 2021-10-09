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
    
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom() {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
 });
 localStorage.setItem("room_name",room_name);
 window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name-" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localstorage.setItem("roomName", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }