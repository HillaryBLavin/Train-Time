// High-level Pseudocode
    // 1. Initialize Firebase database
    // 2. Create a way to grab the values from the user input and save to the database
    // 3. Create a way to retrieve data from the database and write to the DOM

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDfwy5wA_H-TJ-nNXsKier9XkTjg60EUcU",
    authDomain: "train-time-38b6a.firebaseapp.com",
    databaseURL: "https://train-time-38b6a.firebaseio.com",
    projectId: "train-time-38b6a",
    storageBucket: "train-time-38b6a.appspot.com",
    messagingSenderId: "564655145297"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Create a variable to represent current time
var currentTime = moment();

// Create a variable for form validation for 24-Hour clock
var h = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

// 2. Create a way to grab the values from the user input and save to the database
// Add on-click event to the Submit button
$("#add-train-btn").on("click", function(event) {
    // Prevent submit button from submitting
    event.preventDefault();

    // Grab each user input
    var trainName = $("#inputName").val().trim();
    var inputCity = $("#inputCity").val().trim();
    var inputState = $("#inputState").val().trim();
    var firstTrain = $("#inputTime").val().trim();
    var frequency = $("#inputFrequency").val().trim();
    // This will be used later for writing to the database/DOM 
    var destination = inputCity + ', ' + inputState;

    // Validate user input
    if (trainName == "") {
        alert('Please enter a train name.');
        return false;
    }
    if (inputCity == "") {
        alert('Please enter a city.');
        return false;
    }
    if (firstTrain == "" || !firstTrain.match(h)) {
        alert('Please enter a train time using the format HH:mm, in military time.');
        return false;
    }
    if (frequency == "") {
        alert('Please enter a frequency in minutes.');
        return false;
    }

    // Math Time - these methods will calculate the time until the next train arrives
    // Subtracting a year from the firstTrain will ensure that it occurs before the current time
    var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");

    // Calculate the time difference between current time and the time of the first train
    var timeDiff = moment().diff(moment(firstTrainConverted), "minutes");

    // Calculate the remainder when the timeDiff is divided by frequency 
    var timeRemain = timeDiff % frequency;

    // Calculate minutes until next train arrives
    var minTil = frequency - timeRemain;

    // Calculate time next train will arrive
    var eta = moment(moment().add(minTil, "minutes")).format("HH:mm");

    // Create local temp object to hold data for the new train to be added
    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        min: minTil,
        next: eta
    };

    // Uploads added train to the database
    database.ref().push(newTrain);

    // Check your work with Console Log!
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);
    console.log(newTrain.min);
    console.log(newTrain.next);

    // Alert the User
    alert("New train successfully added!");

    // Clears user-input from form
    $("#inputName").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
    $("#inputTime").val("");
});
