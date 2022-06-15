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