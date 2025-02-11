//@ts-nocheck
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

/*
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]As we now have defined what 'tabs' will be, where chrome need to fetch the url hereunder, we can delete this hardcoded 
piece as this variable is the same as the parameter that we have given hereunder!

*/


tabBtn.addEventListener("click", function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // }) with this in the background, let's re-write it and see if we can make sense of it.
    /**So first let's write chrome extension that is an object and that has a key called 'tabs' that is an object
     * as well and that object has a query method*/
    chrome.tabs.query({active: true, currentWindow: true }, function(tabs){
        //console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })   //here we are thus saying: Hey Chrome, I want to query some of your tabs. Then which tabs is 
    //the next question. We're gonna use them inside of the query using an object begin with, I'm going to say, I want
    //the active tab. So set this on true. And then you need to see how many different windows you have opened, and on which window
    //you are working on. In this case, the active one. Chrome API will notice where your cursor is and will take the active window
    //automatically. Now like you write a function we need to do this in this query as well, you need to write your function in here.
    //and this function will be triggered when Chrome has found the tab we have told Chrome to look for. And when Chrome triggers this
    //function it will give us the tabs variable. This is a parameter in this function
    //Now the action will happen in the next lines of code, because it's in the 'tabs' keyword that we will get hold on the URL, so
    //copy these lines inside the second function
    /*
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)*/
    
})
/**Now go to the manifest.json. As we've seen before on microsoft development, we need to add a permission in the manifest to use tabs
 * otherwise the chrome dot tabs simply wouldn't work.
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