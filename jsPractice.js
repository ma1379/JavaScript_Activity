let numPeople = prompt("How many people do you know?")
numPeople = parseInt(numPeople)
const fullNames = []
const lastNames = []
for(let i = 0; i < numPeople; i++) {
let personName = prompt("Input name of person " + (i + 1) + " (First, Last)")
fullNames.push(personName)
let commaIndex = personName.lastIndexOf(',')
lastNames.push(personName.substring(commaIndex+2))
}
let longestNameLength = 0
let longestLastNameLength = 0;
let longestLastNameIndex = -1
let shortestNameLength = 9999
for(let i = 0; i < numPeople; i++) {
    if(lastNames[i].length > longestLastNameLength) {
        longestLastNameLength = lastNames[i].length
        longestLastNameIndex = i
    }
}
console.log("Full name with the longest last name: " + fullNames[longestLastNameIndex])
for(let i = 0; i < numPeople; i++) {
    if(fullNames[i].length < shortestNameLength) {
        shortestNameLength = fullNames[i].length
    }
    if(fullNames[i].length > longestNameLength) {
        longestNameLength = fullNames[i].length
    }
}
console.log("Range of name lengths: " + (longestNameLength - shortestNameLength))
for(let i = 0; i < numPeople; i++) {
    console.log(fullNames[i])
}