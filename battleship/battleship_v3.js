var randomLoc = Math.floor(Math.random() * 5);
var shipLocation = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while(!isSunk) {
    guess = prompt("Ready! Aim! Fire! (Enter a number 0-6): ");

    if (guess === null) {
        alert("Thank you for playing!");
        break;
    }

    guess = parseInt(guess, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6!");
        continue;
    }

    guesses++;

    const hitIndex = shipLocation.indexOf(guess);

    if (hitIndex !== -1) {
        alert("Hit!");
        shipLocation.splice(hitIndex, 1);
        hits++;
        if(shipLocation.length === 0) {
            isSunk = true;
        }
    } else {
        alert("Miss!")
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0) .toFixed(2);
var stats = "You sank my battleship at: " + guesses + " guesses" + "\n" + "And your accuracy is: " + accuracy + "%";
alert(stats);