// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.

let readLineSync = require('readline-sync')

const person1 = {
    name: readLineSync.question("Enter 1st person name: "),
    power: readLineSync.question("Enter Power: "),
    age: readLineSync.question("Enter age: ")
}

const person2 = {
    name: readLineSync.question("\nEnter 2nd person name: "),
    power: readLineSync.question("Enter Power: "),
    age: readLineSync.question("Enter age: ")
}

const checkPower = (person1, person2) => {
    let person1Power = person1.name.length * 35 + person1.power;
    let person2Power = person2.name.length * 35 + person2.power;

    if (person1Power > person2Power) {
        return person1;
    } else {
        return person2;
    }
}

let greaterPowerPerson = checkPower(person1, person2)

console.log("\n\t", greaterPowerPerson.name, "is more powerfull")