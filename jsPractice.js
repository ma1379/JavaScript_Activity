let numPeople = prompt("How many people do you know?")
numPeople = parseInt(numPeople)
const fullNames = []
const firstNames = []
const lastNames = []
for(let i = 0; i < numPeople; i++) {
let personName = prompt("Input name of person " + (i + 1) + " (First,Last)")
fullNames.push(personName)
let commaIndex = personName.lastIndexOf(',')
lastNames.push(personNames.substring(commaIndex+1))
}
let longestNameLength = 0
let longestLastNameLength = 0;
let longestLastNameIndex = -1
let shortestNameLength = 9999
for(let i = 0; i < numPeople; i++) {
    if(fullNames[i].length > longestNameLength) {
        longestNameLength = fullNames[i].length
    }
}