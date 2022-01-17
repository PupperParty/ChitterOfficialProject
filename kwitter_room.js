var firebaseConfig = {
  apiKey: "AIzaSyCNfLpryHdzpQwC8iG0V_QlKzg-IyquPvk",
  authDomain: "chitter-project-45cc0.firebaseapp.com",
  databaseURL: "https://chitter-project-45cc0-default-rtdb.firebaseio.com",
  projectId: "chitter-project-45cc0",
  storageBucket: "chitter-project-45cc0.appspot.com",
  messagingSenderId: "118951289735",
  appId: "1:118951289735:web:406956df0a132f6c29a922"
};


firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


   function addRoom() {
           room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                    purpose : "adding room name" 
              });
               localStorage.setItem("room_name", room_name);
                window.location = "kwitter_page.html";
               }

   function getData() {
           firebase.database().ref("/").on('value',
            function(snapshot) { 
                   document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
               console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                 document.getElementById("output").innerHTML += row; });
               });
               }

   getData();
    function redirectToRoomName(name) {
      console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"; 
       }

       function logout() {
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location = "index.html";
       }
