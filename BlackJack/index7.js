/**Composite Data types: Arrays
 * An important thing to know about arrays is that they are so called zero indexed
 * 
// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",        //0
    "Here's the code for my project",    //1
    "I've just relaunched my portfolio"  //2
]

console.log(featuredPosts[0])

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba
console.log(experience[1])
console.log(experience[2])
console.log(experience[0])
*/
let featuredPosts = [
    "Check out my Netflix clone",        //0
    "Here's the code for my project",    //1
    "I've just relaunched my portfolio"  //2
]
//if you now want to print this out, what would it give in the console?
console.log(featuredPosts.length)

/**Well this gives 3, as arrays are zero indexed, the length isn't. The .length property is just like anything els
 * in life, it counts starting from 1. Thus the length property is always 1 larger then the last index in the array
 * 
 * ok, so up to now our arrays have only included strings or numbers, but actually you can put any datatype you 
 * want in an array and you can mix as much as you want!
 * You can think of an array being multiple compositions of datatypes and their values.
 * So this is why arrays are called Composite Data Types. They stand in contrast with the primitive dataTypes learned
 * up till now: String, number, boolean
 */

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
let name = "Chantal"
let age = 53
let pizza = true
let preferences1 = ["Chantal", 53, true]
let preferences2 = [name, age, pizza]
console.log(preferences1)
console.log(preferences2)

/**Let's use this for our blackjack card game
 * in arrays you always can add extra data at the end or the middle of it, depending on which index you want it.
 * But that's not the way we're going to do this with our cardgame. we're going to use a method that is called
 * push. this allows you to 'push' things into the array
 * 
 */
let cards = [7, 4]
cards.push(6)
console.log(cards)  //this will push 6 into the array. 

/**push is actually a method, in fancy way of saying a function on a object.
 * Now go ahead and solve the challenge
   */
// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)
// How can you remove the last item in an array? Try to google it!
messages.pop(newMessage)
console.log(messages)

//now go back to the BJ game

