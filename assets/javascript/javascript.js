var database = firebase.database();
var newEntry = database.ref();

var destinationEntered = "";
var frequencyTrain = "";
var nextArrival = "";
var nameEntered = "";

$("#submit").on("click", function(event) {
    event.preventDefault();
    
    destinationEntered = $("#destination-input").val().trim();
    frequencyTrain = $("#frequency-input").val().trim();
    nextArrival = $("#arrival-input").val().trim();
    nameEntered = $("#name-input").val().trim();


    newEntry.push({
        name: nameEntered,
        destination: destinationEntered,
        frequency: frequencyTrain,
        arrival: nextArrival,
    })
    

});


newEntry.on("child_added", function(childSnapshot) {
    var newPost = childSnapshot.val();
    
    console.log("name: " + newPost.name);
    console.log("destination: " + newPost.destination);
    console.log("frequency: " + newPost.frequency);
    console.log("arrival: " + newPost.arrival);
    
    var tBody = $("tbody")
    var tRow = $("<tr>");

    var nameTd = $("<td>").text(newPost.name);
    var destinationTd = $("<td>").text(newPost.desination);
    var minutesTd = $("<td>").text("");
    var arrivalTd = $("<td>").text(newPost.arrival);
    var frequencyTd = $("<td>").text(newPost.frequency);
    var overallTd = $("<td>").text("");


    tRow.append(nameTd, destinationTd, minutesTd, arrivalTd, frequencyTd, overallTd);
    tBody.append(tRow);
    $("#table").append(tBody);

});