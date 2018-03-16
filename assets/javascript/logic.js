  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBWgFaQCcWxI_izytjPDHImuK-XDsAAVo0",
  authDomain: "portfolio-cb68f.firebaseapp.com",
  databaseURL: "https://portfolio-cb68f.firebaseio.com",
  projectId: "portfolio-cb68f",
  storageBucket: "portfolio-cb68f.appspot.com",
  messagingSenderId: "533160279517"
};


firebase.initializeApp(config);

var database = firebase.database();

$("#submitbutton").on("click", function() {
  event.preventDefault();

  var name = $("#username").val().trim();
  var email = $("#email").val().trim();
  var message = $("#message").val().trim();

  var newEntry = {
    name: name,
    email: email,
    message: message
  };

  database.ref().push(newEntry)
});
