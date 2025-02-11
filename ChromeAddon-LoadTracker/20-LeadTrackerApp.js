/** 1.Make the delete button work
 */
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
/**Now that we have an addon that works, we are going to do what we normally always should do and that is refactoring our 
 * code, and not only based upon a current need, we're going to refactor it based upon a hypothetical
 * future use case. 
 * Move the renderLeads up under the conditional leadsFromLocalStorage. Because it's the renderLeads we're going to
 * refactor. The reason is because this code is very low in what we call re-usability, because here it is hardcoded 
 * that whenever it's called, it's always going to look at the myLeads variable, the one we've created up here, our global variable
 * myLeads = [], and render up everything that exist in that array at that point in time.
 * Now let's say that we, one time in the futur, also have another array, f.e. let oldLeads = [], perhaps a bunch of leads that 
 * we want to shuffle in this array that yuo won't delete at any given time, but you want to perhaps bring them up in the futur.
 * You would be struggle to rendere them out, because in the renderLeads function we only care about the myLeads array.
 * so what we can do instead is to make this function a bit more dynamic, and let it render out each array we tell him to 
 * render out. the way we do that is to pass in the variabl as a so called 'Argument' when we call it
 */
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads) //put the myLeads array into the function renderLeads so that we can put it into the body of the function
    //but without refering to myLeads directly. it is more or less the same like you pass the id into the DOM element (getElementById)
}

function render(leads) { //in here we can put a variable that refers to the myLeads so that it is accessible in this function
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("dblclick", function(){
    // 3. When clicked, clear localStorage, myLeads, and the DOM
    localStorage.clear()
    myLeads = []
    render(myLeads)

})



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


