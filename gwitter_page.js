//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAcbt0SFegsL_dLCDzleE8qSTUlRaymeXc",
      authDomain: "gwitter-1710.firebaseapp.com",
      databaseURL: "https://gwitter-1710-default-rtdb.firebaseio.com",
      projectId: "gwitter-1710",
      storageBucket: "gwitter-1710.appspot.com",
      messagingSenderId: "312963458785",
      appId: "1:312963458785:web:a0f191c6458d9cd3a7f9a0",
      measurementId: "G-D4QTP043QC"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            Message:msg,
            like:0
      });

      document.getElementById("msg").innerHTML = " ";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function back()
{
      window.location = "kwitter_room.html";
}