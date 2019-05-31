// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCmC595obCgO60abzoENpf64dtoqNfUCvA",
authDomain: "train-activity-aa583.firebaseapp.com",
databaseURL: "https://train-activity-aa583.firebaseio.com",
projectId: "train-activity-aa583",
storageBucket: "train-activity-aa583.appspot.com",
messagingSenderId: "595850416345",
appId: "1:595850416345:web:fd1d82e9a5b7b164"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var newEntry = database.ref();

var destinationEntered = "";
var frequencyTrain = "";
var nextArrival = "";
var nameEntered = "";
var minutesAway = "";

$("#submit").on("click", function(event) {
    event.preventDefault();
    
    destinationEntered = $("#destination-input").val().trim();
    frequencyTrain = $("#frequency-input").val().trim();
    nextArrival = $("#arrival-input").val().trim();
    nameEntered = $("#name-input").val().trim();


    database.ref("Trains").push({
        name: nameEntered,
        destination: destinationEntered,
        frequency: frequencyTrain,
        arrival: nextArrival,

    })
    

});


database.ref("Trains").on("child_added", function(childSnapshot) {
    var newPost = childSnapshot.val();
    
    console.log("name: " + newPost.name);
    console.log("destination: " + newPost.destination);
    console.log("frequency: " + newPost.frequency);
    console.log("arrival: " + newPost.arrival);
    
    var tBody = $("tbody")
    var tRow = $("<tr>");

    var nameTd = $("<td>").text(newPost.name);
    var destinationTd = $("<td>").text(newPost.destination);
    var frequencyTd = $("<td>").text(newPost.frequency);
    var arrivalTd = $("<td>").text(newPost.arrival);
    var minutesTd = $("<td>").text("");
    var overallTd = $("<td>").text("");


    tRow.append(nameTd, destinationTd, frequencyTd, arrivalTd, minutesTd, overallTd);
    tBody.append(tRow);
    $("#table").append(tBody);

});