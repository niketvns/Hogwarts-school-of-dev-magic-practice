// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.


const person1 = {
    name: "Ram",
    age: 30,
    power: 4320
}
const person2 = {
    name: "Krishna",
    age: 31,
    power: 4016
}

function checkAge(person1, person2) {
    if (person1.power > person2.power) {
        return person1;
    } else {
        return person2;
    }
}

let greaterPowerPerson = checkAge(person1, person2);

console.log(greaterPowerPerson.name + " has more power than " + (person1.name == greaterPowerPerson.name ? person2.name : person1.name))


