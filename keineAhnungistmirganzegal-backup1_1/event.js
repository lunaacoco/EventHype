// Event Database Tutorial https://www.youtube.com/watch?v=F6UWb9FNnj4&t=6s

// getting the inputs out of html into vars
var submitBtn = document.getElementById("submitBtn");
var eventName = document.getElementById("eventName");
var eventText = document.getElementById("eventText");

// Function for submitting the inputs
function submitClick() {
// ref to firebase
  var firebaseRef = firebase.database().ref("events");

// one js object for each event
  var event = {
    name: eventName.value,
    text: eventText.value
  }
  firebaseRef.push().set(event);
}
