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
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
