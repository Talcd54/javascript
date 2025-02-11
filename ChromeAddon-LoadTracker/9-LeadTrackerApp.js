/**Let's work on the performance */
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const listItems = []

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems.innerHTML += "<li>" + myLeads[i] + "</li>"
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems

/**DOM manipulation comes with a cost.
 * this is something to remember wheter you could be sure that the performance would be better
 * rendering it with .innerHTML inside of the loop or outside, think about this sentence: 'DOM manipulation comes with a cost'
 * would it be more performant to run the innerHTML in a for loop 3 times, or 1 time outside
 * of it?
 */