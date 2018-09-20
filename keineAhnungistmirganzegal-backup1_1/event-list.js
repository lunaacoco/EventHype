//retrieving the eventlist
var eventName1 = document.getElementById("eventName1");
var eventText1 = document.getElementById("eventText1");

var heading = document.getElementById("heading");

var firebaseEventRef = firebase.database().ref("heading");
firebaseEventRef.on('value', function(datasnapshot){
  heading.innerText = datasnapshot.val();
});
