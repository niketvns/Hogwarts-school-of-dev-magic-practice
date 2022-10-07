// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.


let input = document.querySelector("textarea");

let red_btn = document.querySelector("#red")
let blue_btn = document.querySelector("#blue")
let green_btn = document.querySelector("#green")
let result = document.querySelector(".result")


red_btn.addEventListener("click", redFunction)
blue_btn.addEventListener("click", blueFunction)
green_btn.addEventListener("click", greenFunction)

function redFunction() {
    if (input.value != 0) {
        result.innerHTML = `<h2>${input.value}</h2>`
        result.style.color = "red"
    } else {
        result.innerHTML = "Please Enter Some Text"
        result.style.color = "orange"
    }
}
function blueFunction() {
    if (input.value != 0) {
        result.innerHTML = `<h2>${input.value}</h2>`
        result.style.color = "blue"
    } else {
        result.innerHTML = "Please Enter Some Text"
        result.style.color = "orange"
    }
}
function greenFunction() {
    if (input.value != 0) {
        result.innerHTML = `<h2>${input.value}</h2>`
        result.style.color = "green"
    } else {
        result.innerHTML = "Please Enter Some Text"
        result.style.color = "orange"
    }
}