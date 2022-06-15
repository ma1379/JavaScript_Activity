//var l = prompt("What is the height of the box")
//var w = prompt("What is the height?")
//var h = prompt("What is the height?")
//var length = parseInt(l)
//var width = parseInt(w)
///var height = parseInt(h)

//var volume = (length*width*height)
//console.log(volume)

/*var f = prompt("What is the first grade?")
var s = prompt("What is the second grade?")
var t = prompt("What is the third grade? ")

var first = parseInt(f)
var second = parseInt(s)
var third = parseInt(t)

var grade = ((first+second+third)/3)

if ( grade > 92.5 ){
    console.log("A " + grade )
} else if ( grade > 84.5 ){
    console.log("B " + grade )
} else if ( grade > 77.5 ){
    console.log("C " + grade )
} else if ( grade > 69.5 ){
    console.log("D " + grade )
} else {
    console.log("F" + grade)
}*/

var n1 = prompt("Enter in the #1 name")
var n2 = prompt("Enter in the #2 name")
var n3 = prompt("Enter in the #3 name")

const names = [ n1 , n2 , n3 ]
const length = [ n1.length , n2.length , n3.length ]

console.log(names)
console.log(length)

var longest = parseInt(0) 
var longesttname = ""

for (var i = 0; i < names.length; i++) { 
   if ( names[i].length > longest)
          names[i].length = longest 
          longestname = name[i]
          longest = name[i].length
    }

    console.log( longestname , longest )