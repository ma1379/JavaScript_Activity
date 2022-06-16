let length=parseFloat(prompt("What is the length of the box"))
let width=parseFloat(prompt("What is the width of the box"))
let height=parseFloat(prompt("What is the height of the box"))
let volume=length*width*height
console.log("The volume of the box is "+volume)

let score1=parseFloat(prompt("What is your first test score"))
let score2=parseFloat(prompt("What is your second test score"))
let score3=parseFloat(prompt("What is your third test score"))
let average=(score1+score2+score3)/3
console.log("The average of the test scores is "+average)
if(average>=92.5)
{
    console.log("A")
}
else if(average>=84.5)
{
    console.log("B")
}
else if(average>=77.6)
{
    console.log("C")
}
else if(average>=69.5)
{
    console.log("D")
}
else
{
    console.log("F")
}

let people=parseInt(prompt("How many people do you know"))
const names=[]
for(let count=0;count<people;count=count+1)
{
    let name=prompt("What is the name of  person "+(count+1))
    names.push(name)
}

let longestlastName=names[0].substring(names.indexOf(" ")+1)
for(let count=0;count<people;count=count+1)
{
    if(names[count].substring(names.indexOf(" ")+1).length>=longestlastName.length)
    {
        longestlastName=names[count]
    }
}
console.log("The longest name is "+longestlastName)

let shortestName=names[0]
let longestName=names[0]
for(let count=0;count<people;count=count+1)
{
    if(names[count].length<=shortestName.length)
    {
        shortestName=names[count]
    }
    if(names[count].length>=longestName.length)
    {
        longestName=names[count]
    }
}
console.log("The range of lengths of the names "+(longestName.length-shortestName.length))

for(let count=0;count<people;count=count+1)
{
    console.log(names[count])
}
