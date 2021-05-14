function buttonText() { //defines function
    var str = "Well Hello There!"; //assigns string to variable
    var result = str.fontcolor("purple"); //assigns color and value to variable
    document.getElementById("Button_Text").innerHTML = result; //gets element with id "Button_Text"
}

function buttonText2() { //defines function
    var sentence = "I am learning"; //assigns a string to variable
    sentence += "JavaScript!" //concatenates additional string to variable on previous line
    document.getElementById("Button_Text2").innerHTML = sentence; //gets element with id "Button_Text2"
}


