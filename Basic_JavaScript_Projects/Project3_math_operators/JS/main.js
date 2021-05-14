window.alert(Math.random() * 100) //displays an alert displaying a random number between 1-100

function addition_Function() { //defines function
    var addition = 15 + 35; //defines variable and assigns a value
    document.getElementById("Math").innerHTML = "The result of this addition function is: " + addition; //displays string and value of variable
}

function subtraction_Function() { //defines function
    var Subtraction = 5-2; //defines variable
    document.getElementById("Math2").innerHTML = "The result of this subtraction function is: " + Subtraction; //displays string and value of variable
}

function multiplication_Function() { //defines function
    var Multiplication = 6 * 8; //defines variable
    document.getElementById("Math3").innerHTML = "The result of this multiplication function is: " + Multiplication; //displays string and value of variable
}

function division_Function() { //defines function
    var Division = 48 / 6; //defines variable
    document.getElementById("Math4").innerHTML = "The result of this division function is: " + Division; //displays string and value of variable
}

function more_Math() { //defines function
    var simple_Math = (3+5) * 12 / 2 -10; //defines variable and assigns value
    document.getElementById("Math5").innerHTML = "The result of this function with multiple operators is: " + simple_Math; //displays string and value of variable
}

function modulus_Operator() { //defines function
    var simple_Math = 25 % 6; //defines variable and assigns value
    document.getElementById("Math6").innerHTML = "The remainder in this particular division function is: " + simple_Math; //displays string and value of variable
}

function negation_Operator() { //defines function
    var x = 15; //defines variable and assigns value
    document.getElementById("Math7").innerHTML = "The negation of the value input into this function is: " + -x; //displays string and value of variable
}

function increment_Function() { //defines function
    var a = 10; //defines variable and assigns value
    document.getElementById("Math8").innerHTML = "The value of this variable after being incremented is: " + ++a; //displays string and value of variable
}

function decrement_Function() { //defines function
    var b = 5; //defines variable and assigns value
    document.getElementById("Math9").innerHTML = "The value of this variable after being decremented is: " + --b; //displays string and value of variable
}

document.write("Here is the value of pi: " + Math.PI) ; //uses math object to display value of Pi