// Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
let person = {
    name: "Chantal",
    age: 53,
    country: "Kortenberg"
}
function logData(){
    let info = person.name + " is " + person.age + " years old and lives in" + person.country
    console.log(info)
}
logData()

/**let age = 15

 less than 6 years old -> free
 6 to 17 years old     -> child discount
18 to 26 years old    -> student discount
 27 to 66 years old    -> full price
 over 66 years old     -> senior citizen discount

 Create a conditional statement (if/else/else if) that logs out the discount
 the passenger will get based upon the value of the age variable 
 */


// //my results
// if(age < 6){
//     console.log("free")
// }else if( age >6 && age < 17){
//     console.log("child discount")
// }else if(age >18 && age < 26){
//     console.log("student discount")
// }else if(age >27 && age < 66){
//     console.log("full price")
// }else {
//     console.log("senior citizen discount")
// }
let age = 26
//teachers result
if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")    
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}
/**======================================================================== */
let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* train your for loop skills and geography skills:
Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world:")
for(let i= 0; i < largeCountries.length; i++){
    console.log("- " + largeCountries[i])
}

let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift() (works in the beginning of the array, these are
//counterparts of push () and pop())

largeCountries2.pop() //pops away Monaco
largeCountries2.push("Pakistan")  //puts Pakistan in the place of Monaco
console.log(largeCountries2)
//unshift makes the array longer, like push does
largeCountries2.shift() // Tuvalu is gone
largeCountries2.unshift("China") //puts China in the beginning of the array
console.log(largeCountries2)

/**============================================================================ */
let dayOfMonth = 12
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if(weekday === "Friday" && dayOfMonth === 13){
    console.log("Oh my! 😱")
}else {
    console.log("It's a sunny day!")
}

/**Rock-paper-scissor
 * it's a game where 2 people choose with their hands either a rock, paper or scissor.
 * And the way it works is that the rock will beat the scissor, but pater will wrap itself
 * arround the rock so the rock looses. And if the match is between the scissor and the
 * paper, the scissor will cut the paper so the paper looses.
 * Create a function that returns one of the random items in the array when  it's called. 
 * So you need to work with math dot random in order to achieve this. (Go back and watch 
 * previous index) if you've forgotten about that or search in google
 * // Create a function that returns a random item from the array
 */

let game = ["paper", "rock", "scissors"]

function getHand() {
    let randomIndex = Math.floor (Math.random() * 3)
    return game[randomIndex]
}
console.log (getHand() )



