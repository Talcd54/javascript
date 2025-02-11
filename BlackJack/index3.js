let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true  //declare the variable and assign its value to true

// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out. we don't want any console.logs into these codeblocks
    if (sum <= 20) {
        message += "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message += "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message += "You're out of the game! 😭"
        isAlive = false
    }


// 3. Log it out!
console.log(message)

//now let's fix our biggest flaw in our game, that is that we don't have an interface