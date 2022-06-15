let t1 = prompt("1st test score?")
let t2 = prompt("2nd test score?")
let t3 = prompt("3rd test score?")

let avg = (t1+t2+t3)
avg = (avg/3)
avg = parseFloat(avg)
if (avg > 90) {
    console.log("A" + ", " + avg);
} else if (avg > 80) {
    console.log("B" + ", " + avg)
} else if (avg > 70) {
    console.log("C" + ", " + avg)
} else if (avg > 60) {
    console.log("D" + ", " + avg)
} else {
    console.log("F" + ", " + avg)
}