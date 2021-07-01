
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCNjjGk-SRr1OubdAtZyaOPp4HQkvwqEdA",
      authDomain: "kwitter-app-86934.firebaseapp.com",
      projectId: "kwitter-app-86934",
      storageBucket: "kwitter-app-86934.appspot.com",
      messagingSenderId: "863228820124",
      appId: "1:863228820124:web:7c2d4f87dcef7c87c20b59"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
