let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//1. again, start with adapting the html (index2.html)
//2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")
let cardsNewEl = document.getElementById("cardsNew-el")
let thirdCard = 5

function startGame(){
    //3. Render the cards on the page using this format -> "cards: 10 4 " "
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
/**At this point we now have an overview of the title (question), which cards we're using
 * the sum of the both cards and a start button. Now we first need to build a new button
 * to state that we want to draw another card. So go to the index2.html and add a button
 * with a click event
 */


// 2.) Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard(){
    console.log("Drawing a new card from the deck!")
    cardsNewEl.textContent = "Card: "  + thirdCard
    sum += thirdCard
    startGame()
}
/** 3.) Go to the css and add some space between the buttons, because when making the screen smaller you
 * won't see a space anymore between the buttons
 */

/** 4.) Next steps:
 *     // 1. Create a card variable, and hard code its value to a number (2-11)
    
    // 2. Add the new card to the sum variable
    
    // 3. Call startGame()
 */