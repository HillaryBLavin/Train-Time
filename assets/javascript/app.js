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
    var trainCity = inputCity + ', ' + inputState;

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

    // Do some math to figure out 


})
