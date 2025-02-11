//@ts-nocheck
/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/ 

let anagrams = [
    ["Can Assault", "Santa Claus"],
    ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
    ["Frosty The Snowman", "Honesty Warms Front"],
    ["Drastic Charms", "Christmas Cards"],
    ["Congress Liar", "Carol Singers"],
    ["The Tin Glints", "Silent Night"],
    ["Be The Helm", "Betlehem"],
    ["Is Car Thieves", "Christmas Eve"]
]


function findAnagrams(array) {
    // Helper function to sanitize and sort a string
    function sanitizeAndSort(inputString) {
      let text = inputString.replace(/\s+/g, "").toLowerCase().split("").sort().join("")
      text = text.toLowerCase().split("").sort().join()
      text.replace(/\s{2,}/g, '')    //delete empty spaces in the word
      return text
    }
  
    // Filter the array for valid anagrams
    return array.filter(pair => {
      if (pair.length !== 2) return false; // Ensure each pair contains exactly two elements
      const [first, second] = pair
      const sortedFirst = sanitizeAndSort(first)
      const sortedSecond = sanitizeAndSort(second)
      console.log(`Comparing: "${first}" -> "${sortedFirst}" with "${second}" -> "${sortedSecond}"`)
      return sortedFirst === sortedSecond;
    })
  }
  
  let validAnagrams = findAnagrams(anagrams)
  console.log("Valid Anagrams:", validAnagrams)

  
  
