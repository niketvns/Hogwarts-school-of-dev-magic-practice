// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?

let std1 = {
    name: "Rahul",
    unitTestMarks: 26,
    preFinalMarks: 42,
    finalMarks: 43
}
let std2 = {
    name: "Ashutosh",
    unitTestMarks: 24,
    preFinalMarks: 45,
    finalMarks: 40
}
let std3 = {
    name: "Shivam",
    unitTestMarks: 27,
    preFinalMarks: 40,
    finalMarks: 41
}
let std4 = {
    name: "Anand",
    unitTestMarks: 24,
    preFinalMarks: 45,
    finalMarks: 41
}
let std5 = {
    name: "Ravi",
    unitTestMarks: 27,
    preFinalMarks: 43,
    finalMarks: 40
}


let std1Marks = std1.unitTestMarks + std1.preFinalMarks + std1.finalMarks;
let std2Marks = std2.unitTestMarks + std2.preFinalMarks + std2.finalMarks;
let std3Marks = std3.unitTestMarks + std3.preFinalMarks + std3.finalMarks;
let std4Marks = std4.unitTestMarks + std4.preFinalMarks + std4.finalMarks;
let std5Marks = std5.unitTestMarks + std5.preFinalMarks + std5.finalMarks;

if (std1Marks > std2Marks && std1Marks > std3Marks && std1Marks > std4Marks && std1Marks > std5Marks) {
    console.log(std1.name + " got the heighest Marks, " + "which is " + std1Marks + "/130")
} else if (std2Marks > std1Marks && std2Marks > std3Marks && std2Marks > std4Marks && std2Marks > std5Marks) {
    console.log(std2.name + " got the heighest Marks " + " which is " + std2Marks)
} else if (std3Marks > std1Marks && std3Marks > std2Marks && std3Marks > std4Marks && std3Marks > std5Marks) {
    console.log(std3.name + " got the heighest Marks " + " which is " + std3Marks)
} else if (std4Marks > std1Marks && std4Marks > std2Marks && std4Marks > std3Marks && std4Marks > std5Marks) {
    console.log(std4.name + " got the heighest Marks " + " which is " + std4Marks)
} else {
    console.log(std5.name + " got the heighest Marks " + " which is " + std5Marks)
}


let avgMarks = (std1Marks + std2Marks + std3Marks + std4Marks + std5Marks) / 5

console.log("Average Marks is: " + avgMarks)