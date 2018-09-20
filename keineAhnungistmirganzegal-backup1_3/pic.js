var eventUploadPic = document.getElementById("eventUploadPic");

//$("#eventUploadPic").on("change", function(event){
  //selectedFile = event.target.files[0];
//});


function uploadPic(){
var selectedFile = document.getElementById("eventUploadPic")
var filename = selectedFile.name;
var uploadRef = storageRef.child("pictures/" + filename);
var uploadTask = storageRef.put(selectedFile);
var mountainImagesRef = storageRef.child('images/Coco.jpg');

ref.put(filename).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});
}

//uploadTask.on("state_changed",function(snapshot){

//});
//  function(error){
//  },
// function(){
  //var downloadURL = uploadTask.snapshot.downloadURL;
  //console.log(downloadURL);
//});
//}
//Tutorials:
// https://www.youtube.com/watch?v=4ZCy1AK7x4I
