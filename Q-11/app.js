// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

let userName = document.querySelector("#userName")
let password = document.querySelector("#password")
let btn = document.querySelector("button")
let result = document.querySelector(".result")
let p = document.querySelector("p")


btn.addEventListener("click", checkPassword)

function checkPassword() {
    if (password.value.length < 10) {
        result.innerHTML = "Not Valid Password"
        result.style.color = "red"
        password.style.border = "3px solid red"
        userName.style.border = "3px solid red"
        p.innerHTML = "❌ Length of Password Should be atleast 10"
        p.style.color = "red"
    } else {
        result.innerHTML = "<h2><i><b>Success 👍</b></i></h2>"
        result.style.color = "green"
        password.style.border = "3px solid green"
        userName.style.border = "3px solid green"
        btn.disabled = true;
        p.innerHTML = "✔️ Length of Password Should be atleast 10"
        p.style.color = "green"
    }
}