/* 

Attack and Defend Game:

Four characters
User chooses/clicks character for attack 
        card moves to attacker-area
        text to ask user to choose defender pops into defender-area
then user clicks character as defender
        card moves to defender-area
        Attack button appears
User clicks Attack button:
    Attacker wins/loses points
    Defender wins/loses points
    all documented in the score-area

Health Points and Attack points reflect ups and downs. 

If Attacker wins:
    that character gains higher Attack-Points power. 
    User chooses another character as defender
    Restart button appears

If Attakcer loses: 
    "You lose" --> maybe not as an alert (put in div?)
    Restart button appears


JSON objects for each character:
    name, health points, attack points, base points counter attack, etc. 


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

        function startGame() {   
                hanSolo = {
                        id: 0,
                        name: "Han Solo",
                        healthPoints: 120,
                        baseAttack:10,
                        attackPower: 10,    
                        counterAttackPower: 8,
                        img:"assets/images/Han_Solo.jpg",
                        value: "soloHans",
                    },

                stormTrooper = {
                        id: 1,
                        name: "Carl",
                        healthPoints: 100,
                        baseAttack: 8,
                        attackPower: 8,
                        counterAttackPower: 5,
                        img:"assets/images/storm-trooper.jpg",
                        value: "trooperCarl",
                    },

                chewBacca = {
                        id: 2,
                        name: "Chewy",
                        healthPoints: 150,
                        baseAttack:9,
                        attackPower: 9,
                        counterAttackPower: 10,
                        img:"assets/images/chewy.jpg",
                        value: "baccaChew",
                    },

                darthVader = {
                        id: 3,
                        name: "Darth Vader",
                        healthPoints: 100,
                        baseAttack: 12,
                        attackPower: 12,
                        counterAttackPower: 12,
                        img:"assets/images/DarthVader.jpg",
                        value: "vaderDarth",
                    },
                

            
            
            $(".xcharacter").on("click", function(event) {
                console.log("WTF");

            });
        };
    startGame();
            





});
