// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well?

let news = prompt("Enter Your News")
let source = prompt("What is the source of this news")

function checkNews() {
    if (news.length == 0 || source.length == 0) {
        alert("Please Enter both the fields")
    } else {
        if (source.toUpperCase() === "TELEGRAM" || source.toUpperCase() === "WHATSAPP" || source.toUpperCase() === "FACEBOOK" || source.toUpperCase() === "FB") {
            alert("You should avoid this news Because it can be fake")
        } else {
            alert("You can beleive this news")
        }
    }
}

checkNews();


