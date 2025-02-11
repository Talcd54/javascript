//@ts-nocheck
/**Emoji fighter */
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
// @ts-ignore
fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    //let randomIndex = Math.floor (Math.random() * 17)
    //return game[randomIndex]
    let randomOne = Math.floor (Math.random() * fighters.length) //we want 2 rounds of emojies whils using the VS so add another line
    let randomTwo = Math.floor (Math.random() * fighters.length)
    console.log(fighters[randomOne] + " vs " + fighters[randomTwo])
    // @ts-ignore
    stageEl.textContent = fighters[randomOne] + " vs " + fighters[randomTwo]
})