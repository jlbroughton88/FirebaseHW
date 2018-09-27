
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBMmg9k8p7pS0CMVAYeySOoWntxfBpQqQM",
    authDomain: "train-ddc9c.firebaseapp.com",
    databaseURL: "https://train-ddc9c.firebaseio.com",
    projectId: "train-ddc9c",
    storageBucket: "train-ddc9c.appspot.com",
    messagingSenderId: "126451504468"
  };
  firebase.initializeApp(config);

// Variable to referance the database
var database = firebase.database();

$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // Turning form inputs into variables
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim()
    var trainTime = moment($("#trainTimeInput").val().trim(), "HH:mm").minute(Number);
    var frequency = $("#frequencyInput").val().trim()

    // Pushing data to firebase
    database.ref().push({
        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency
    })

    // Add inputs to show in HTML
    var newRow = $("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + trainTime + "</td><td>" + frequency + "</td></tr>");
    $("#tbody").append(newRow);
})

// Firebase watcher + initial loader
database.ref().on("child_added", function(snapshot) {

    // Make new variabes for the firebase snapshots of the previous variables
    var firebaseTrainName = snapshot.val().trainName;
    var firebaseDestination = snapshot.val().destination;
    var firebaseTrainTime = snapshot.val().trainTime;
    var firebaseFrequency = snapshot.val().frequency;

    // Sanity check
    console.log(firebaseTrainName);
    console.log(firebaseDestination);
    console.log(firebaseTrainTime);
    console.log(firebaseFrequency);
})

// MomentJS Stuff
var timeNow = moment();
console.log(timeNow);


// UNFINISHED, am still going to fix the time functionality, need sleep and coming in tomorrow morning to figure it out.