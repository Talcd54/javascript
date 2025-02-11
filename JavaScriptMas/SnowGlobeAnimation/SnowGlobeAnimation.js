//@ts-nocheck
const snowGlobe = document.querySelector('.snow-globe')
let snowInterval
const toggleButton = document.querySelector('.button')
const isSnowing = false

function createSnowflake() {
/* 
Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake 
should have a random starting position, animation duration, and size.
2. See index.css
*/ 
    //Create snowflakes with .createElement.
    const snowFlake = document.createElement("div")
    // Give each snowflake a CSS class of "snowflake".
    snowFlake.classList.add('snowflake')
    //Use emojis to render the snowflakes. Style them however you like! font-size and animation duration will help 😉
    //- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
    snowFlake.textContent = Math.random() < 0.04 ? '☃️' : '❄️'

    //random properties for position, size, anim duration
    const size = Math.random() * 10 + 10
    const leftPosition = Math.random() * 100
    const animDuration = Math.random() * 3 + 2
    //styles
    snowFlake.style.fontSize = `${size}px`
    snowFlake.style.left = `${leftPosition}%`
    snowFlake.style.animationDuration = `${animDuration}s`
    
    snowGlobe.appendChild(snowFlake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000)
}

setInterval(createSnowflake, 50) // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/
/*
toggleButton.addEventListener('click', () => {

    if(toggleButton === true){
        snowGlobe.classList.remove('shaking')
        snowInterval = setInterval(createSnowflake, 100)
        toggleButton.textContent = "Stop snowfall"
        
    }else {
        snowGlobe.classList.add('shaking')
            //Add snowflakes to the DOM with appendChild.
        snowGlobe.appendChild(snowFlake)
        //remove blizzard effect
        setTimeout(() => {
        snowFlake.remove()
        },
        animDuration * 500)
        toggleButton.textContent("Start snowfall")
    }

})*/