/**Now tha we have the most of the peace of the app, let's stick them together so that when the user
 * enters the lead and hits the button, it actually will render out opposed to us having it hardcoded
 * So first of all Wrap the code in a renderLeads() function and then Call the renderLeads() function
 * inside of the button clicks
 * When the user adds something into the input field, and hits the save input button , the text in the inputfield
 * will be pushed into the leads array, and then if we call the renderLeads(), and have the for loop wrapped inside
 * of that renderLeads function, it should render out whatever is inside there.
 */
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //3. clear out the input field
    inputEl.value = ""
    // 2. Call the renderLeads() function
    renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}

/**Extra job to do is when the user has put somehting in the input field, we would want to clear the input field
 * once the button was clicked. this will happen in the addEventListner event function. go find on google how to do that.
 */