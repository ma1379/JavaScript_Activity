let people;
const peopleNames = [];
let biggest;
let smallest;

people = parseFloat(prompt("People you know?"));
for (let i = 0; i < people; i++) {
    let names = prompt("name of person " + (i+1) + "?");
    peopleNames.push(names);
}
for (let count = 0; count < people; count++) {
    biggest = peopleNames[0];
    smallest = peopleNames[1];
    if (peopleNames[count].length > biggest.length) {
        biggest = peopleNames[count];
    }
    if (peopleNames[count].length < smallest.length) {
        smallest = peopleNames[count];
    }
}

console.log("Longest name" + biggest)
console.log("Range of lengths: " + smallest + " to " + biggest)

for (let num = 0; num < people; num++) {
    console.log("Name of person " + (num + 1) + ": " + peopleNames[num])
}