function Call_Loop() { //defines function - counts up until while condition is no longer true
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

function string_length_function() { //defines function - utilizes string length method to output total length of string
    var string1 = "How long is this string, I wonder?";
    var n = string1.length;
    document.getElementById("string_length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //defines variables
var Content = "";
var Y;
function Instrument_Loop() { //defines function - iterates through list until for loop is no longer true
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //defines function 
    var Cat_Picture = []; //defines variable
    Cat_Picture[0] = "sleeping"; //defines different variables within array
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    Cat_Picture[4] = "meowing";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[1] + ".";
}

function constant_function() { //defines function
    const Vehicle = {type:"Car", make:"Hyundai", model:"Elantra", color:"gold"}; //defines constant variables
    Vehicle.price = "$5,000";
    document.getElementById("Constant").innerHTML = "The " + Vehicle.make + " " + Vehicle.model + " costs " + Vehicle.price + ".";
}

var W = 182; //defines variable and assigns a value
document.write(W);
{
    let W = 350; //changes value of W within this block
    document.write("<br>" + W);
}
document.write("<br>" + W); // displays global value of W 

let instrument = { //creates object
    type: "Guitar", //defines properties of object
    brand: "Fender",
    model: "Stratocaster",
    color: "black",
    description : function() { //defines a method
        return "The instrument is a " + this.type + ". Specifically a " + this.color + " " + this.brand + " " + this.model + ".";
        }
};
document.getElementById("Instrument_object").innerHTML = instrument.description();








