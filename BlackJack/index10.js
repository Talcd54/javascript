let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
// How do you keep the spaces between the words if I remve them from the array?
for(i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " "
}
