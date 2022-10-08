// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

let readLineSync = require('readline-sync')

const person1 = {
    name: readLineSync.question("Enter 1st person name: "),
    age: readLineSync.question("Enter age: "),
    yuga: readLineSync.question("Enter yuga: ")
}

const person2 = {
    name: readLineSync.question("\nEnter 2nd person name: "),
    age: readLineSync.question("Enter age: "),
    yuga: readLineSync.question("Enter yuga: ")
}

const checkPower = (person1, person2) => {
    if (person1.age > person2.age) {
        return person1;
    } else if (person1.age < person2.age) {
        return person2;
    } else {
        return 1;
    }
}

let greaterAgePerson = checkPower(person1, person2)
if (greaterAgePerson === 1) {
    console.log(person1.name, "and", person2.name, "has equal age")
} else {
    console.log(greaterAgePerson.name, "is elder than", greaterAgePerson.name === person1.name ? person2.name : person1.name)
}

