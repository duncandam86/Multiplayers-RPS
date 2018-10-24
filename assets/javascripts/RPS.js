$(document).ready(function () {
    //Global variable
    var player1 = "null";
    var player2 = "null";

    //dertermine who turn 
    var player1turn = true;
    var player2turn = true;
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDhhsOiaTYxe1K-r0OdfvLqais6myjzf8A",
        authDomain: "multiplayer-rps-99e04.firebaseapp.com",
        databaseURL: "https://multiplayer-rps-99e04.firebaseio.com",
        projectId: "multiplayer-rps-99e04",
        storageBucket: "multiplayer-rps-99e04.appspot.com",
        messagingSenderId: "171609570012"
    };
    firebase.initializeApp(config);

    //store dat from firebase in database variable
    var database = firebase.database();
    //set up click event to capture name 
    //enter name player 1 - confirm
    // log on firebase
    $("#submit-1").on("click", function (event) {
        console.log("submission yeah");
        event.preventDefault();
        var player1name = $("#name-input-1").val().trim();
        $("#player-1").text(player1name);

        //make sure player one exists
        if (player1name === "") {
            return;
        }
        //player 1 turn: choose RPS
        // log on firebase
        else {
            $("#rockP1").on("click", function (event) {
                event.preventDefault();
                var player1Choice = $(this).attr("value");
                console.log(player1Choice);
                database.ref("/player/player1").push({
                    name: player1name,
                    choice: player1Choice,
                })
            })
            $("#paperP1").on("click", function (event) {
                event.preventDefault();
                var player1Choice = $(this).attr("value");
                console.log(player1Choice);
                database.ref("/player/player1").push({
                    name: player1name,
                    choice: player1Choice,
                })
            })
            $("#scissorP2").on("click", function (event) {
                event.preventDefault();
                var player1Choice = $(this).attr("value");
                console.log(player1Choice);
                database.ref("/player/player1").push({
                    name: player1name,
                    choice: player1Choice,
                })
            })
        }
    })

    //enter name player 2 - confirm
    // log on firebase
    $("#submit-2").on("click", function (event) {
        console.log("submission yeah");
        event.preventDefault();
        var player2name = $("#name-input-2").val().trim();
        $("#player-2").text(player2name);

        //make sure player one exists
        if (player2name === "") {
            return;
        }
        //player 2 turn: choose RPS
        // log on firebase
        else {
            $("#rockP2").on("click", function (event) {
                event.preventDefault();
                var player2Choice = $(this).attr("value");
                console.log(player2Choice);
                database.ref("/player/player2").push({
                    name: player2name,
                    choice: player2Choice,
                })
            })
            $("#paperP2").on("click", function (event) {
                event.preventDefault();
                var player2Choice = $(this).attr("value");
                console.log(player2Choice);
                database.ref("/player/player2").push({
                    name: player2name,
                    choice: player2Choice,
                })
            })
            $("#scissorP2").on("click", function (event) {
                event.preventDefault();
                var player2Choice = $(this).attr("value");
                console.log(player2Choice);
                database.ref("/player/player2").push({
                    name: player2name,
                    choice: player2Choice,
                })
            })
        }
    })




    //set up a value listener to record any changes
    database.ref("/player").on("value", function (snapshot) {
        console.log(snapshot);
        console.log(snapshot.key)
    })



    //if both players present - game can start

    //player 2 turn: choose RPS
    // log on firebase
    // determine which one win
    //increase win for the player who won
    // increase loss for the player who lost
    // remove the player choices from firebase 


















})