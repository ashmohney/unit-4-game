/* 

Attack and Defend Game:

Four characters
User chooses character to fight and then to fight with (Defender). 
User clicks Attack button:
    Attacker wins/loses points
    Defender wins/loses points.

Health Points and Attack points reflect ups and downs. 

If Attacker wins:
    that character gains higher Attack-Points power. 
    User chooses another chacter to Attack. 

If Attakcer loses: 
    "You lose" --> maybe not as an alert (put in div?)
    Restart button appears


JSON objects for each character:
    name, health points, attack points, base points counter attack, etc. 

four movable buttons that can disappear and reappear in appropriate div (cards?)

if/else loops or switches?? 
  
*/
$(document).ready (function() {

//Setting Global Vars

//Characters
var hanSolo;
var stormTrooper;
var chewBacca; 
var darthVader;

//Game Set
var characters = [];
var attacker = null;
var defendersArr = [];
var defender = null;



//Chacter Objects at start function:

    characters = [
       
            {
                id: 0,
                name: "Han Solo",
                healthPoints: 120,
                baseAttack:10,
                attackPower: 10,
                counterAttackPower: 8,
                img:"assets/images/Han_Solo.jpg",
                value: "soloHans",
            },

            {
                id: 1,
                name: "Carl",
                healthPoints: 100,
                baseAttack: 8,
                attackPower: 8,
                counterAttackPower: 5,
                img:"assets/images/storm-trooper.jpg",
                value: "trooperCarl",
            },

            {
                id: 2,
                name: "Chewy",
                healthPoints: 150,
                baseAttack:9,
                attackPower: 9,
                counterAttackPower: 10,
                img:"assets/images/chewy.jpg",
                value: "baccaChew",
            },

            {
                id: 3,
                name: "Darth Vader",
                healthPoints: 100,
                baseAttack: 12,
                attackPower: 12,
                counterAttackPower: 12,
                img:"assets/images/DarthVader.jpg",
                value: "vaderDarth",
            },
        ];

    
    
    $("#solo").on("click", function(event) {
        console.log("Han Solo!");

    });

    $("#trooper").on("click", function(event) {
        console.log("Carl!");
        
    });

    $("#bacca").on("click", function(event) {
        console.log("Chewbacca!");
        
    });

    $("#vader").on("click", function(event) {
        console.log("I am your father.");
        
    });





});
