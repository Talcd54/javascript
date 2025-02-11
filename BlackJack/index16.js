let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)  //let's check if the casino is honest, there shouldn't be anything in there
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

/**A little finetune as we notice that we can push this button continuously. But when we're broken, we shouldn't
 * be able to push this button  furthermore. So we need to stop it when the game is over. And also I shouldn't be 
 * able to start a game with one card either. if you would refresh the page, you'll see that result.
 * So there are 2 conditions that we need to check, both if I'm still in the game - so if isAlive is true -and
 * another one I can't have blackjack either. This learns us to learn about logical operators which lets you
 * combine multiple conditions inside an if statement, so that the conditions only should be run if the 
 * multiple conditions are satisfied. To learn this go to index 17.js
 */
function newCard() {
    //after index17.js: Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}
