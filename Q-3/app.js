// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.


let input = document.querySelector("textarea");

let h1_btn = document.querySelector("#h1")
let h2_btn = document.querySelector("#h2")
let h3_btn = document.querySelector("#h3")
let result = document.querySelector(".result")


h1_btn.addEventListener("click", h1Function)
h2_btn.addEventListener("click", h2Function)
h3_btn.addEventListener("click", h3Function)

function h1Function() {
    if (input.value != 0) {
        result.innerHTML = `<h1>${input.value}</h1>`
        result.style.color = "black"
    } else {
        result.innerHTML = "Please Enter Some Text"
        result.style.color = "red"
    }
}
function h2Function() {
    if (input.value != 0) {
        result.innerHTML = `<h2>${input.value}</h2>`
        result.style.color = "black"
    } else {
        result.innerHTML = "Please Enter Some Text"
        result.style.color = "red"
    }
}
function h3Function() {
    if (input.value != 0) {
        result.innerHTML = `<h3>${input.value}</h3>`
        result.style.color = "black"
    } else {
        result.innerHTML = "Please Enter Some Text"
        result.style.color = "red"
    }
}