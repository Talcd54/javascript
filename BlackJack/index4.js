let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2.) Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

// 2) Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame(){
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    //console.log(message)
    messageEl.textContent = message
}


/**3) So now our player can click the start button but we're only logging out the message
 * and that's not what we want to do. We want to display that info on the page
 * along with the information about the cards and the sum. 
 * to start with the message I want to solve a 2 part challenge:
 * 1. store the message-el paragraph in a variable called messageEl
 * 2. Display the message in the messageEl using messageEl.textContent
  */

/**4) 3 part action
 * 1.) go to html and give the sum paragraph and id of sum-el
 * 2.) Store the sum paragraph in a variable called sumEl
 * 3.) Render the sum on the page using this format -> "Sum: 14"
 */

/**Next step: let's use a different method to call the DOM element, and it's called the 
 * querry selection
 * e.g. let sumEl = document.querySelector("#sum-el")
 * Since this is a more dynamic method, we need to be a bit more specific in the value we 
 * pass into it. So here we actually have to pass the hashtag in front of sum-el to tell the query
 * selector it's actually the element with the ID of sum-el that we're looking for
 * query refers to 'question' and Selector refers to CSS selectors
 * in each type of file this is shown the same way:
 * .css: you will see # in front of the element
 * .html: you'll see also # in front of the element.
 * if you want to make out a class of this you need to change it in the css and html and in here, the code
 * css: .element
 * html:  class ="the element"
 * js:  ...querySelector(".theElement")
 */