// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

let input = document.querySelector("input");
let fontIncrease = document.querySelector("#fontIncrease")
let fontDecrease = document.querySelector("#fontDecrease")

fontIncrease.addEventListener("click", increaseText)
fontDecrease.addEventListener("click", decreaseText)


let actualFont = 20;

function increaseText() {
    actualFont = actualFont + 2
    input.style.fontSize = `${actualFont}px`
}
function decreaseText() {
    actualFont = actualFont - 2
    input.style.fontSize = `${actualFont}px`
}