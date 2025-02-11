//@ts-nocheck
/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}


/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/ 

function emojifyWord(word){
  //check if the word starts and ends with a colon
  if(word.startsWith(":") && word.endsWith(":")){
    //extract the inner word
    const emojiName = word.slice(1, -1)
    //check the hackedEmojis object for a match
    if(hackedEmojis.hasOwnProperty(emojiName)){
        return hackedEmojis[emojiName]
    }
  }
  //if no match, return the original word
  return word
}

console.log(emojifyWord(":angry:"))
console.log(emojifyWord(":happy:"))

/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/ 

function emojifyPhrase(phrase){
    //split the phrase into words
    const words = phrase.split(" ")
    //replace each word with its picture version
    const emojifiedWords = words.map(emojifyWord)
    //join the words back into a phrase
    return emojifiedWords.join(" ")
}

console.log(emojifyPhrase("Those shoes :puke:"));
console.log(emojifyPhrase("Just read your article :thumbsdown:"))
console.log(emojifyPhrase("Those shoes  :puke:  are amazing! "))



// Stretch goal: don't just replace the shortcodes, but also 
// any emojis are added directly to the text.
const emojiReplace = {
    "😠": "🎁",
    "👎": "👏",
    "🤦‍♂️": "🎅",
    "😭": "‍😄",
    "🤮": "🤩"
}
function emojifyPhraseWithDirectEmojis(phrase){
    let updatedPhrase = emojifyPhrase(phrase)
    for(const [negative, positive] of Object.entries(emojiReplace)){
        updatedPhrase = updatedPhrase.split(negative).join(positive)
    }
    return updatedPhrase
}

console.log(emojifyPhraseWithDirectEmojis("that was terrible 😠 :cry: "))
