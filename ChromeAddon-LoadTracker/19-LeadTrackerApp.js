let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
//there are 2 possibilities that could happen here: 1) there is a key and value in local storage because we've put it
//in there, 2. there are no key and value in there, thus Null. What should we do in those cases?
//well, if the value is Null, we are not going to do anything, because there's no point to render out any
//leads if there is no leads that is saved there. So then we're just gonne ignore it, not do anything. But if we
//find a couple of leads, then we first need to set myLeads to whatever leads we are returning back, and then call the 
//renderLeads() function
/**CHALLENGE:
 * 3. Check if leadsFromLocalStorage is truthy
   4. If so, set myLeads to its value and call renderLeads() */
   if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
   }
   //now we have persisted our leads across refresh. you are now working with a small DB, basically.

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
