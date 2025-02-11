let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    //Grab the URL of the current tab. Basically what we do in the next line of code but not with the hardcoded url
    //here above. How will we do this? Well, ask Google (chrome extension get current tab) -- Stackoverflow. Delete
    //semicolons if present, adapt the code like we are writing it.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // since only 1 tab should be active and in the current window at once the return variable should only have 
        // 1 entry
        let activeTab = tabs[0]
        let activeTabId = activeTab.id //or do whatever you need
        /**we won't be able to test this code right here as the code is refering to a chrome API. Here we're just building
         * a little scrimba page that doesn't use an API. So for us to see if this work, we need to try to make this code work
         * and then deploy it and see if this works out in the wild. So let's brake this code in pieces and look how we can build
         * this step by step in the next chapter ---24-
         */
    })

    //console.log(tabs[0].url)  //how do we got a hold of the value? well just add .url behind
    //3. Save the url instead of logging it out
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
/**So this does help us already far, but this is not completely what we want-- but this is how coding works. cut the 
 * whishes in pieces and build them up. So let's go on and let's try to fill up the input field with 
 * the url from whatever website we're on, to save it automatically when we click on SAVE TAB.
 * So we want to be able to open our chrome extension on any URL, and then when we hit the  SAVE TAB button the
 * extension should head over to the address bar, grab a hold of the URL and save it in the list of leads.
 * Question is: in which part of the code should we go ahead and try to talk with the chrome API to ask him for
 * the current tab URL? well actually after the user clicked on the tabBtn.
 */

function render(leads) {
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

deleteBtn.addEventListener("dblclick", function() {
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