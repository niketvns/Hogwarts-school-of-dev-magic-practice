// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?



let news = document.querySelector("textarea")
let source = document.querySelector("input")
let button = document.querySelector("button")
let result = document.querySelector(".output")

function checkNews() {
    if (news.value.length == 0 || source.value.length == 0) {
        result.innerHTML = "Please Enter both the fields"
    } else {
        if (source.value.toUpperCase() === "TELEGRAM" || source.value.toUpperCase() === "WHATSAPP" || source.value.toUpperCase() === "FACEBOOK" || source.value.toUpperCase() === "FB") {
            result.innerHTML = "<h1>Don't believe things on FB, Whatsapp and Telegram</h1>"
        } else {
            result.innerHTML = "<h1>You can beleive this news</h1>"
        }
    }
}

button.addEventListener("click", checkNews)


