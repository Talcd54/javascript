/**RANDOMNESS
 * Method1: random
 */
let randomNumber = Math.random()
console.log(randomNumber)
/**this generates a number between 0 and 1, 1 not included
 * now something to know is that the randomness, whilst looking completely random to us, isn't truly random in computer
 * science. there is some deterministic variables going on under the hood here; And it's actually a really hard problem and
 * computer science to generate truly random numbers. but for our use cases we're not going to wonder about this
 */

/**Method 2: multiplying */
let randomNumber = Math.random() * 6
console.log(randomNumber)
/**In which range will our randomNumber be now?
 * from 0 to 5.999999999999999. so here we have multiplied our range with 6, not entireley, but going on 6
 */

/**Method 3: math dot floor:
 * what it does: it takes some input number, and then does something with that number and returns it so that you can 
 * storethat in a new variable. it simply removes decimals
 */
let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber)

/**use previous floor method and wrap that arround the single floor method */
let randomNumber = Math.floor(Math.random() * 6 )
console.log(randomNumber)

//Write down all the possible values randomNumber can hold now!
//1-2-3-4-5
/**what is logical, because the first method will only take all the whole numbers and the second will multiply
 * with the number we choose. And that second method only will go up to 5, from 0 to 5
 */

/**Try to modify the expression to get all the eyeses of a dice */
let randomNumber = Math.floor(Math.random() * 6 ) + 1
console.log(randomNumber)

/**To understand lets compare the numbers
 * numbers: the multiplied number chosen
 * 0   1   2   3   4   5   
 * dices
 * 1   2   3   4   5   6
 * so here we see that we'll actually need to add 1 up to each random number to immitade a dice's eye
 */

/**Last job to do is creating a function rollDice() that returns a random number between 0 and 6 */
function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6 ) + 1
    return randomNumber
}
console.log(rollDice())
