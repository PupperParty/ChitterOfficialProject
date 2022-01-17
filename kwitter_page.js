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
  room_name = localStorage.getItem("room_name");
   
  function send() {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });

      document.getElementById("msg").value = "";
  }

  function getData() {
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;

      } }); }); }
      getData();

      function logout() {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
              }