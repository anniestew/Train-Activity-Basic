var database = firebase.database();
var newEntry = database.ref();

var destinationEntered = "";
var frequencyTrain = "";
var nextArrival = "";
var nameEntered = "";

$("#submit").on("click", function(event) {
    event.preventDefault();
    
    destinationEntered = $("#position-input").val().trim();
    frequencyTrain = $("#start-input").val().trim();
    nextArrival = $("#rate-input").val().trim();
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

    // var nameTd = $("<td>").text(newPost.name);
    // var destinationTd = $("<td>").text(newPost.position);
    // var monthsTd = $("<td>").text("");
    // var startTd = $("<td>").text(newPost.startDate);
    // var rateTd = $("<td>").text(newPost.rate);
    // var overallTd = $("<td>").text("");


    // tRow.append(nameTd, positionTd, startTd, monthsTd, rateTd, overallTd);
    // tBody.append(tRow);
    // $("#table").append(tBody);

});