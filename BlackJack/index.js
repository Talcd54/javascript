// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 11
let secondCard = 13

let sum = firstCard + secondCard

if (sum < 21){
    console.log("do you want to draw a new card? 🙂")
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack 🥳")
} else {
    console.log("You're out of the game! 😭")
}
console.log(sum)

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
if (age < 21){
    console.log("You can not enter the club!")
}else {
    console.log("Welcome!")
}

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
let age2 = 101
if (age2 < 100){
    console.log("Not elegible")
}else if (age2 === 100){
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}