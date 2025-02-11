// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)

}
for(i = 0; i > 5; i++){
    console.log(i)
}
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
for(i = 10; i < 101; i += 10){
    console.log(i)
}

//if we want to show the content of our array we can do this one by one
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])
// DRY - Don't repeat yourself thus
//to make this more readable and efficient, let's user the for loop

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "Great"
]
/*
for (i =0; i < 4; i++){
    //console.log(message)
    //but now we also need to go in each round of the loop, over all the content in the array, thus
    console.log(messages[i])  //use the i as the index
}*/

/**But there's still another problem here. Might we add another string in the array, it won't 
 * be shown. so this is not fully dynamic. But I have a trick. How can I hold of the number 6
 * in a dynamic way? well you might remember that an array has a property 'length', and that we
 * can use because it will refer to the actual length of the array
 */
for (i =0; i < messages.length; i++){
    //console.log(message)
    //but now we also need to go in each round of the loop, over all the content in the array, thus
    console.log(messages[i])  //use the i as the index
}

//let's go back to our cards
let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for(i=0; i < cards.length; i++){
    console.log(cards[i])
}

