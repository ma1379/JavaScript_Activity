let grade1 = prompt("Grade of test 1")
let grade2 = prompt("Grade of test 2")
let grade3 = prompt("Grade of test 3")
grade1 = parseFloat(grade1)
grade2 = parseFloat(grade2)
grade3 = parseFloat(grade3)
let letterGrade = ""
let average = (grade1 + grade2 + grade3) / 3
if(average >= 92.5) {
    letterGrade = "A"
} else if(average >= 84.5) {
    letterGrade = "B"
} else if(average >= 77.5) {
    letterGrade = "C"
} else if(average >= 69.5) {
    letterGrade = "D"
} else{
    letterGrade = "F"
}
console.log("Your average test score is " + average + " and your letter grade is " + letterGrade + ".")