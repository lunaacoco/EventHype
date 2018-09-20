//retrieving the eventlist
// Tutorial https://www.youtube.com/watch?v=nUUPedePJ4o&t=4s



// Test Heading
var heading = document.getElementById("heading");

var firebaseEventRef = firebase.database().ref("heading");
  firebaseEventRef.on('value', function(datasnapshot){
  heading.innerText = datasnapshot.val();
  });



// Event List
var rootRef = firebase.database().ref().child("events");

rootRef.on('child_added', snap => {

  var name = snap.child("name").val();
  var text = snap.child("text").val();
  var location = snap.child("location").val();
  var pic = snap.child("pic").val();
  var startt = snap.child("startt").val();
  var endt = snap.child("endt").val();
  var points = snap.child("points").val();

  $("#table").append("<tr><td>" + name + "</td><td>" + text + "</td><td>" + location + "</td><td>" + pic + "</td><td>" + startt + "</td><td>" + endt + "</td><td>" + points + "</td></tr>");

  });




//$(document).ready(function){
//};
