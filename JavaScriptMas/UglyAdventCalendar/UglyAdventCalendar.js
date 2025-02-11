//@ts-nocheck
const calendarContainer = document.getElementById('calendar');

/*classe = calendar-box  ==> indien datum van vandaag rand veranderen van kleur
daarin <p>9</p>*/

const today = new Date()
const day = today.getDate() // Haalt de dag van de maand op (1-31)
console.log(day);



for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li')
  box.classList.add('calendar-box')
    let number = document.createElement('p')
    number.innerHTML = i
    const icon = document.createElement('i')
    icon.classList.add('fas', 'fa-gift')
    let description = document.createElement('p')
    description.innerHTML = "Open me!"
    box.appendChild(number)
    box.appendChild(icon)
    box.appendChild(description)
    if(i === day){
      box.style.border = '5px solid black'
    }
  calendarContainer.appendChild(box)  //here append 24 boxes with each 3 paragraphs that contains
  //the number
  //the icon
  //the text 
}


