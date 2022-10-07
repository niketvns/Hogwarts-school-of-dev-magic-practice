// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.

let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let result = document.querySelector("#result");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

add.addEventListener("click", addFunction);
subtract.addEventListener("click", subtractFunction);
multiply.addEventListener("click", multiplyFunction);
divide.addEventListener("click", divideFunction);

function addFunction() {
    if (input1.value.length != 0 || input2.value.length != 0) {
        let sum = 0;
        sum = Number(input1.value) + Number(input2.value);
        result.innerText = `sum of ${input1.value} and ${input2.value} is ${sum}`;
    } else {
        alert("Hey User! Please Enter Valid Data");
    }
}

function subtractFunction() {
    if (input1.value.length != 0 || input2.value.length != 0) {
        let sub = 0;
        sub = Number(input1.value) - Number(input2.value);
        result.innerText = `subtraction of ${input1.value} and ${input2.value} is ${sub}`;
    } else {
        alert("Hey User! Please Enter Valid Data");
    }
}

function multiplyFunction() {
    if (input1.value.length != 0 || input2.value.length != 0) {
        let mul = 0;
        mul = Number(input1.value) * Number(input2.value);
        result.innerText = `multiplication of ${input1.value} and ${input2.value} is ${mul}`;
    } else {
        alert("Hey User! Please Enter Valid Data");
    }
}

function divideFunction() {
    if (input1.value.length != 0 || input2.value.length != 0) {
        let div = 0;
        div = Number(input1.value) / Number(input2.value);
        result.innerText = `division of ${input1.value} and ${input2.value
            } is ${div.toFixed(3)}`;
    } else {
        alert("Hey User! Please Enter Valid Data");
    }
}
