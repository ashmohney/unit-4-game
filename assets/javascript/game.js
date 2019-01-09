/* Version 2:
Sticking with star wars characters and theme for Number Guess Game (Crystal Game in HW) due to time constraints

Game with four characters, each has a random number assigned between 1-12
The random number changes with every win or loss

Character click/numbers will add to previous click/numbers in Your Number area
Unitl the Your Number is >= Computer Number, registering wins and losses on screen

*/

//DOM ready
$(document).ready (function() {
    console.log("Let's get ready to Rumble!");


    //Global vars
    var hanSolo = Math.floor(Math.random() * (13 - 1)) + 1;
    var trooperCarl = Math.floor(Math.random() * (13 - 1)) + 1;
    var chewBacca = Math.floor(Math.random() * (13 - 1)) + 1;
    var darthVader = Math.floor(Math.random() * (13 - 1)) + 1;
    var clickVar = 0;


    // set button values
    document.getElementById("hanSolo").value = hanSolo;
    document.getElementById("trooperCarl").value = trooperCarl;
    document.getElementById("chewBacca").value = chewBacca;
    document.getElementById("darthVader").value = darthVader;

    var randoComp = Math.floor(Math.random() * (121-19)) +19;   //random number for computer number 

    var yourScore = 0;                                          //increases during game, resets at win or loss

    var wins = 0;                                               //increases when randoComp is equal to yourScore
    var losses = 0;                                             //increases when yourScore is greater than randoComp

    
    // clear function to be called in scoreCheck function
    var clearFunc = function() {
            
            yourScore = 0;
            $("#user-num").text(yourScore);
            
            randoComp = Math.floor(Math.random() * (121 - 19)) + 19;
            $("#comp-num").text(randoComp);

            hanSolo = Math.floor(Math.random() * (13 - 1)) + 1;
            trooperCarl = Math.floor(Math.random() * (13 - 1)) + 1;
            chewBacca = Math.floor(Math.random() * (13 - 1)) + 1;
            darthVader = Math.floor(Math.random() * (13 - 1)) + 1;

            document.getElementById("hanSolo").value = hanSolo;
            document.getElementById("trooperCarl").value = trooperCarl;
            document.getElementById("chewBacca").value = chewBacca;
            document.getElementById("darthVader").value = darthVader;
     };


    // score check function to be called in the buttons below
    var scoreCheck = function() {

        if(yourScore > randoComp) {
            losses = (losses + 1);
            $("#loss-num").text(losses);
            alert("You lose!");
            clearFunc();
        } else if(yourScore == randoComp) {
            wins = (wins + 1);
            $("#wins-num").text(wins);
            alert("You Win!");
            clearFunc();
        };
    };
    
    // writing in numbers into the apporpriate divs/spans
    $("#user-num").text(yourScore);
    $("#comp-num").text(randoComp);
    $("#wins-num").text(wins);
    $("#loss-num").text(losses);

    // Making the buttons work
    $(".xcharacter").click(function() {
        clickVar = $(this).val();
        yourScore = parseInt(clickVar, 10) + yourScore;
        $("#user-num").text(yourScore);
        scoreCheck();
    });

    

    

});
