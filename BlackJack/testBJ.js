//@ts-nocheck
/** Blackjack game by Scrimba.com */
let player = {
    name: "chantal",
    chips: 200,
    bet: 0
}
/**test */
let cards = []
let sum = 0
let sumBet = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")  //<p id="message-el">Place your bets!</p>
let sumEl = document.getElementById("sum-el")      //<p id="sum-el">Sum:</p>
let cardsEl = document.getElementById("cards-el")  //<p id="cards-el">Cards: </p>
let playerEl = document.getElementById("player-el")    //<p id="player-el"></p>
playerEl.textContent = player.name + ": $" + player.chips   // chantal: $200
let betEl = document.getElementById("bet-amount")  //<p id="bet-amount">Your bet: </p>
betEl.textContent = "Your bet: " + player.bet
let startButton = document.getElementById("button-start")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function increaseBet(){
    if(player.chips >= 10 ){
        sumBet += 10
        betEl.textContent = "Your bet: " + player.bet + sumBet
        player.chips -= 10
        playerEl.textContent = player.name + ": $" + player.chips
    }else{
        messageEl.textContent = "You don't have enough chips!"
    }
}

function decreaseBet(){
    if(sumBet >= 10){ 
        sumBet -= 10
        betEl.textContent = "Your bet: " + player.bet + sumBet
        player.chips += 10
        playerEl.textContent = player.name + ": $" + player.chips
    }else{
         messageEl.textContent = "You don't have enough chips!"
    }

}

function startGame() {
    if(sumBet >=10){
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }else{
        startButton.disabled = true
        increaseBet()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        //newCard()
        if(isAlive === true){
            //cardsEl.textContent += cards[i] + " " 
            newCard()
        }else{
            payoutWins()
        }
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        payoutWins()
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function payoutWins(){   
    if(hasBlackJack === true){
        player.chips += sumBet * 2
        playerEl.textContent = player.name + ": $" + player.chips
    }else if(sum >=16 && sum < 21){
        player.chips += sumBet
        playerEl.textContent = player.name + ": $" + player.chips
    }else{
        //player.chips -= sumBet
        playerEl.textContent = player.name + ": $" + player.chips
    }
    sumBet = 0; // Reset the count variable
    betEl.textContent = "Your bet: " + player.chips; // Reset the bet display
    cardsEl.textContent = "Cards: " // Reset the cards display
    sumEl.textContent = "Sum: " // Reset the sum display
}

function resetGame(){
    // Reset all variables
    cards = [];
    sum = 0; // Reset sum to 0
    hasBlackJack = false;
    isAlive = false;
    message = "Place your bets!";
    player.chips = 200; // Reset chips to initial value
    playerEl.textContent = player.name + ": $" + player.chips; // Reset chips display
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    messageEl.textContent = message; // Display reset message
    betEl.textContent = "Your bet: " + 0; // Reset bet
    startButton.disabled = false; // Enable start button
}