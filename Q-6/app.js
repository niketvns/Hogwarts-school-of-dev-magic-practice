// Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

let btn = document.querySelector("button")
let text = document.querySelector("h3")


btn.addEventListener("click", function () {
    text.style.display = "none"
})