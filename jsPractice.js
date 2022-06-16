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

function longestLastName(lastName, fullName) {
let longestLastNameLength = 0
let longestLastNameIndex = -1
for(let i = 0; i < numPeople; i++) {
    if(lastName[i].length > longestLastNameLength) {
        longestLastNameLength = lastName[i].length
        longestLastNameIndex = i
    }
}
return fullName[longestLastNameIndex]
}
function nameRange(fullName) {
let longestNameLength = 0
let shortestNameLength = 9999
for(let i = 0; i < numPeople; i++) {
    if(fullName[i].length < shortestNameLength) {
        shortestNameLength = fullNames[i].length
    }
    if(fullName[i].length > longestNameLength) {
        longestNameLength = fullNames[i].length
    }
}
return (longestNameLength - shortestNameLength)
}
console.log("Full name with the longest last name: " + longestLastName(lastNames, fullNames))
console.log("Range of name lengths: " + nameRange(fullNames))
for(let i = 0; i < numPeople; i++) {
    console.log(fullNames[i])
}