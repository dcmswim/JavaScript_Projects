X = 25; //defining variables
Y = 25;
Z = 35;
A = "25";
B = "Cat";
C = "Dog";

document.write("word" + 5); //coercion (combines string and number)

document.write(5 > 2); //compares 2 values 
document.write(2 > 5);

console.log(37 - 12); //displays result in console log
console.log(10 > 20);

//true/false examples
document.write(10 == 10); //checks if 2 values are equal
document.write(5 == 10);

document.write(X === Y); //compares 2 variables 
document.write(X === Z);
document.write(A === X);
document.write(X === Z);

document.write(10 > 5 && 2 > 1); //true AND statement
document.write(10 >5 && 1 > 2); //false AND statement
document.write(2 > 1 || 1 > 2); //true OR statement
document.write(1 > 2 || 3 > 4); //false OR statement



function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; //displays value of zero divided by zero (will come up as not a number)
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("Words"); //checks if string is not a number
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("50"); //checks if value is not a number (True or false)
}

function my_Function4() {
    document.getElementById("Test4").innerHTML = 2E310; //displays value too large for JavaScript to display (infinity)
}

function my_Function5() {
    document.getElementById("Test5").innerHTML = -2E310; //displays negative value too large for JavaScript to display (-infinity)
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(25 > 10); //checks if comparison is true and returns opposite 
}
function not_not_Function() {
    document.getElementById("NotNot").innerHTML = !(5 > 10); //checks if comparision is true and returns opposite
}