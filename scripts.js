
diceArray = []

var sumDice;
var selectOneDie = document.getElementsByClassName('die');


document.addEventListener('DOMContentLoaded', function() {
    
    var newDieBtn = document.getElementById('newDieBtn');

    newDieBtn.addEventListener('click', function(){
        diceArray.push(new Die());
    })

    var rollDiceBtn = document.getElementById('rollDiceBtn');
    rollDiceBtn.addEventListener('click', function(){
        
        diceArray.forEach(function(die) {
           die.value.innerHTML = getRandomNumber(); 
           console.log(diceArray);
        });    
    })

    var sumDiceBtn = document.getElementById('sumDiceBtn');
    sumDiceBtn.addEventListener('click', sum);
    
});

// var fi = '5';

// Number(fi);

function Die(){
    this.div = document.createElement('div');
    this.div.className = 'die';

    this.value = document.createElement('span');
    this.value.className = 'span'
    this.value.innerHTML = getRandomNumber();
    parseInt(this.value);
    

    this.div.appendChild(this.value);
    document.body.appendChild(this.div);
}



// Die.prototype.roll = function(){
//     var rollDiceBtn = document.getElementById('rollDiceBtn');
//     rollDiceBtn.addEventListener('click', function(){
        
//         diceArray.forEach(function(die) {
//            die.value.innerHTML = getRandomNumber(); 
//            console.log(diceArray);
//         });    
//     })
// }

function getRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}


function sum() {
    var total = 0;

    for(i = 0; i < diceArray.length; i++) {
        
       total = total + Number(diceArray[i].value.innerText);
    }
alert(total);
   
}














// **General Requirements**


// * Your class must have a function named `roll` that generates a random integer 1-6, sets the `value` property, and updates the div on the page with the new value.
// * When a new Die is created, it should automatically create a div, roll itself, and put the div on the screen

// 1. Create an index.html file, a JS file, and a CSS file.
// 2. Implement the objectives of the lab as follows:
//     * The page must contain a button labeled Generate Die. You can go ahead and put this in your HTML. (No reason to make this harder by creating it in code when you can just put it in your HTML)
//     * Clicking the button should create a new Die object (thus causing a div to be added to the screen with a random number 1-6)
//     * The dice should show up on your page in a grid, similar to the layout of DOM DOM DOMMMMM.
//     * The page must contain a button labeled Roll Dice, which should cause all the dice on the screen to `roll`, updating their values.


// *Hints*
// * You can set a property on your Die object that holds the Div representing the die on the page. See the Person example in the lecturette above.

// * You will probably want to store each Die you create in a global array. This may be helpful when it comes time to roll all the dice.

// * Clicking the `Roll Dice` button can loop through that array, where you will have access to the properties and functions of each instance of Die.

// * When approaching any aspect of this lab, always think of starting in JavaScript first and then getting a DOM element to work with
//     * If you get a DOM element, there is no way it can tell you what Die object it is affiliated with
//     * However, a Die object can have a variable that contains a DOM element (div)

// * Create a `sumDice` function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.

// * Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value

// * Add a feature where double clicking on a die on the page causes that die to be removed from the page
//     * Be careful to take appropriate measures so that the `sumDice` function still reports the correct sum after you delete a die