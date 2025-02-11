/**Let's go back to our game blackjack.Let's say we have 2 variables
 * const playerName = "Per"
 * let credits = 0
 * Immediately, upon seeing these 2 variables a developer will know that the const variable can't be changed further in the code
 * whilst the let variable could be reassigned, even ought to be reassigned. So the developper might assume something like
 * credits = credits - 10  f.e.
 * So, If possible, use const. If not, use let.
 * This is the biggest benefit of const. It gives us a way to quickly signalize to anyone what we want to do with the variables.
 * If a developer might see this code further in the coding
 * playerName = "Ingrid" he/she will automatically see that something is wrong with the code. that the person who has written this
 * code mixed up the let and const or perhaps didn't understand it.
 *  */

// Whit this explanation:
// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
let basePrice = 520
let discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

/**Answer C:  basePrice and discount 
 * 
 * Answer Teacher: and also fullPrice because this is a new variable that is only used in this line, not under
 * it because it's just called to reflect in the console, thus also fullPrice should be const!
 * 
*/