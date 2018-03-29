// High-level Pseudocode
    // 1. Initialize Firebase database
    // 2. Create a way to grab the values from the user input and save to the database
    // 3. Create a way to retrieve data from the database and write to the DOM

// Initialize Firebase
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


