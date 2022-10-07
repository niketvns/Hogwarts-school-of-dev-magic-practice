// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.


const person1 = {
    name: "Ram",
    age: 30,
    power: 4016
}
const person2 = {
    name: "Krishna",
    age: 31,
    power: 4016
}

let person1Power;
let person2Power;

function checkAge(person1, person2) {
    person1Power = (person1.name.length) * 35 + person1.power;
    person2Power = (person2.name.length) * 35 + person2.power;

    if (person1Power > person2Power) {
        return person1;
    } else {
        return person2;
    }
}

let greaterPowerPerson = checkAge(person1, person2);

console.log(greaterPowerPerson.name + " has more power than " + (person1.name == greaterPowerPerson.name ? person2.name : person1.name))
console.log("power of Ram is: " + person1Power)
console.log("power of Krishna is: " + person2Power)


