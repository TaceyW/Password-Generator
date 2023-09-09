const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passBoxOneEl = document.getElementById("passBoxOne-el")
let passBoxTwoEl = document.getElementById("passBoxTwo-el")

function randomChar(){
    return Math.floor(Math.random()* characters.length)
}

function generate(){
    passBoxOneEl.textContent = ''
    passBoxTwoEl.textContent = ''
    for(let i= 0; i < 15; i++){
        let passOne = randomChar()
        let passTwo = randomChar()
        passBoxOneEl.textContent += characters[passOne]
        passBoxTwoEl.textContent += characters[passTwo]
    }
}