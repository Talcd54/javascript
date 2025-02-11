/*
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"


if (sum <= 20){
    console.log("do you want to draw a new card? 🙂")
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack 🥳")
    hasBlackjack = true
} else {
    console.log("You're out of the game! 😭")
}
console.log(sum)
*/

//CASH OUT
//in order to know if someone won and the player needs to be payed, we need a variable that reflex that the player has BJ.
//this is done with means of a boolean, true/false. Above, ad the variable hasBlackjack and define it to false, as at the beginning
//of this game, the user has nothing, so has blackjack is false
// in the loop, if the player HAS blackjack we are going to put this boolean on true

//now you can keep track if a user needs to be cashed out an we can create an account for it
// create a variable called isAlive and assign it to true
// Flip its value to false in the appropriate code block
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackjack = false
let isAlive = true

if (sum <= 20){
    console.log("do you want to draw a new card? 🙂")
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack 🥳")
    hasBlackjack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}
console.log(isAlive)

/**tell me if these booleans are true or false */
console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false