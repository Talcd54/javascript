//@ts-nocheck
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "/banana.png"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sort(){
    for(let i = 0; i < fruit.length; i++){
       /* if(i === "🍎"){
            appleShelf.textContent[i]
        }else {
            orangeShelf.textContent[i]
        }
        return i*/
        if(fruit[i] === "🍎"){
            // @ts-ignore
            appleShelf.textContent += "🍎"
        }else if (fruit[i] === "🍊"){
            // @ts-ignore
            orangeShelf.textContent += "🍊"
        }
    }
}
sort()
