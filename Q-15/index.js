// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.

let readLineSync = require('readline-sync')

const person1 = {
    name: readLineSync.question("Enter 1st person name: "),
    power: readLineSync.question("Enter Power: "),
    age: readLineSync.question("Enter age: ")
}

const person2 = {
    name: readLineSync.question("Enter 2nd person name: "),
    power: readLineSync.question("Enter Power: "),
    age: readLineSync.question("Enter age: ")
}

const checkPower = (person1, person2) => {
    if (person1.power > person2.power) {
        return person1;
    } else if (person1.power < person2.power) {
        return person2;
    } else {
        return 1;
    }
}

let greaterPowerPerson = checkPower(person1, person2)
if (greaterPowerPerson === 1) {
    console.log(person1.name, "and", person2.name, "has equal Power")
} else {
    console.log(greaterPowerPerson.name, "is more powerfull")
}

