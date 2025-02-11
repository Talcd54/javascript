let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

/**1. let's execute the first part of our storage feature: and that consists of saving the my leads array to localstorage
 * should happen on line 11, aftter you have pushed inputEl to myLeads array and cleared out the input
 * field. Also remember to use the JSON.stringify(), we want to be explicit about this wheter or not the 
 * browser would do this for us. After you hit your solution, you should run the code by filling out the input
 * field and hitting the 'save input' button because the console.log will also be run and it hit into local
 * storage and gets the item that is called myLeads
  */

localStorage.clear()    //null
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    //where you want to store.what youwant to do(key, value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

/**2. we are still struggling with the fact that when we refresh the browser, our leads are gone. Well actually
 * they aren't gone as they are stored in our local storage. But we haven't written the code to fetch the leads by
 * heading into localStorage, fetch the leads and then displaying them. When we are refreshing the entire page, we 
 * aren't actually doing anything. We're just setting the myLeads array to an empty array. and we aren't even
 * triggering leads. So there are multiple things we need to fix up here:
 * Get the leads from the localStorage
 * Store it in a variable, leadsFromLocalStorage
 * Log out the variable
 */
/**3. Get the leads from the localStorage
      Store it in a variable, leadsFromLocalStorage
    Log out the variable 
    remind the JSON.parse() method that you learned earlier, because you want to use that to parse the string
    you get from local storage so that you turn it back into an array.

    If you now refresh your browser you will see that the console is logging out the links that we have saved
    in our localStorage. So it works.
    If I now do local storage dot clear, right above that line and run it, it will give me 'null'.
    So, what does this mean? Null is a so called 'falsie' value that we developers use to signalize emptiness.
    And here the developers behind local storage (the people from google who have implemented localStorage into 
    Chrome) have made it so that it returns Null when we ask for a key that doesn't exist. And this counts for all
    browsers because they follow the same specifications.  However this means that we'll end up in a situation
    where this variable leads from localStorage is either Null (= falsy value) or it is an array, which is a so called
    truthy value. This isn't the same as true and false though. So we need to dig deeper wat is exactly truthty and
    falsy. We'll do that in a next lesson 18-TruthyFalsy
 */

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
