var text = "" ;
var i;
for (i = 0; i < 10; i++) { //creates loop 
    if (i === 6) { break; } //breaks loop once var i equals 6
    text += "The number is " + i + "<br>"; // loops back to for statement
}
document.getElementById("break_ex").innerHTML = text;

var text = "" ;
var i;
for (i = 0; i < 10; i++) { //creates loop
    if (i === 5) { continue; } //skips iteration of loop when i equals 5 and continues 
    text += "The number is " + i + "<br>";
}
document.getElementById("continue_ex").innerHTML = text;