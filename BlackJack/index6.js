let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cardsNewEl = document.getElementById("cardsNew-el")
let cards = [firstCard, secondCard]   //=ordered list of items--in the renderGame() change the card notation with this array

// 1. Create a new function called startGame() that calls renderGame()
function startGame(){
    renderGame()
}


function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + card[1]   //arrays are so colled indexed. thus here the zero
    //referes to the firstCard and the 1 refers to the secondCard. This gives us the possibility to render dynamically
    //all the cards that  we're adding in our cardselement, regardless of all our cards we have inside of our
    //array
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

function newCard(){
    console.log("Drawing a new card from the deck!")
    cardsNewEl.textContent = "Card: "  + thirdCard
    sum += thirdCard
    renderGame()
}

/**Now let's review the logic behind the functions. If another developper sees this he will think: why do we 
 * start the game again after clicking newCard? this doesn't semantically add up.
 * so what we're gonna do here is change the name of the start game function to e.g. to renderGame, because that is
 * what we're actually doing. We're rendering out the current state of the game. so change it too in the call
 * function in newCard()
 * You could change this event in the html, but it is better to keep it this way because down the line there might
 * be other things you wanna do in this game. So instead, 1. 
 */

/**So now we need to fix out the rendering of the cards. If we click new card the number is shown in the paragraph
 * you created in newCard. but we want actually all the cards been rendered next to each other. For that we need 
 * to put all cards in one variable regardless of how many cards it is. The way to do this is actually called
 * an array which is essentially a list of items
 * 
 * Go to index7.js
 */

