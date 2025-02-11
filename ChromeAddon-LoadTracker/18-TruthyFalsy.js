//example slotmachine up
const credits1 = 12
if(credits1 > 0){
    console.log("let's play 🎰 ")
}else {
    console.log("Sorry, you have no more cedits 😭")
}
/**Java isn't that strickt in what you shove into the if value. If you would replace 'credits > 0' with credits alone, this still
 * would work. So eventhough this would be evaluated to 12, when it's shoved into a conditional statement, JavaScript will then again
 * translate 12 to true. the same happenes if the credit variable is set to 0. JavaScript would then say 'no this is a falsy value', so
 * I'm going to translate that to false
 * So where you have learned about True and False before you now have to learn about
 * Truthy
 * Falsy
 * e.g.
 * If I would change credits > 0   into "yolo" JavaScript would see this as truthy, because he reads a string, and a string is truthy in the
 * condition. the same counts if you might put an array in that condition, JS will also see this as truthy
 */
const credits2 = 12
if(["sqdfsd", "qsdfqsdf"]){
    console.log("let's play 🎰 ")
}else {
    console.log("Sorry, you have no more cedits 😭")
}
/**let's put an empty string in the statement.....that will result in the second line, the else line. Because JS will see this as 'Falsy' 
 * Although this is hard to get and understand, it's not that hard. Just remember these 6 values
 * false
 * 0
 * " "
 * null
 * undefined
 * NaN    Not a Number(rarely ever used)
 * These are the FALSY values in JavaScript
 * 
 * False, Null and undefined are the most common results in the developers world.
 * Null and undefined deserves a bit of more time, because a lot of developers are confused about these 2 and mix them together.
 * Let's look at the simularities:
 * they are both primitive data types that just like strings, number and booleans, and they're are also both ways to signalize emptyness.
 * However, on high leve, the core difference is that 
 * Null is how you as a developer signalize emptiness whereas  
 * undefined is where JavaScript signalizes emptiness
 * 
 * Let's say you are creating a live streaming app and you have current viewers, and that's set to NULL, meaning that null people are
 * watching the livestream at the moment. However a few minutes later a few viewers might popup
*/
let currentViewers = null

//you might wanna do
currentViewers = ["Jane", "Nick"] 
/**the reason this might be a usefull way of discribing the situation in terms of how many people are watching the stream is because you
 * might wanne act upon wether or not ther eare people in the stream
  */
 if (currentViewers){
    //do something
    console.log("we have viewers")
 }

 let currentViewers2
 console.log (currentViewers2)  //if we would run this code, where the currentViewers2 has be declared but not assigned, and we would log it
 //out, we would receive an undefined from JS or kind of like empty. Likewise if this would have been an object and you would want to log out
 //a key that doesn't exist, random key using the dot.syntax, you'll also get an undefined.
 console.log(currentViewers2.randomKey)  //js tried to  look for currentViewers2  but it was empty
 /**same if you would ad and array with 1 element in it but you are looking for element 5, JS undefined */
 let currentViewers3 = ["jane"]

console.log(currentViewers3[5])

/**Tips and tricks to know if something is truthy or falsy.
 * Use boolean("something") to check if this exists or not.
 */
let trueOrFalse = Boolean("Hello")
console.log(trueOrFalse)  //this results in true. if you remove the value of the boolean you would get false
let trueOrFalse2 = Boolean("")
console.log(trueOrFalse2)  //false, as an empty string is a falsy value

/**Challenges: */
console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) //true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) //true
console.log(  Boolean(-0)   ) // false
/**now go back to the LeadTrackerApp and use these knowledge in order to build a conditional for the leads we have stored (or not) in localStorage  */