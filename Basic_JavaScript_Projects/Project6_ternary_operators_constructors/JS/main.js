function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52 ) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young": "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + 
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2() {
    document.getElementById("New_And_This").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + 
    Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

function Animal(Species, Breed, Age) { //object constructor 
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_Age = Age;
}

var Mittens = new Animal("Cat", "Tabby", 4); //defines variables
var Fido = new Animal("Dog", "Lab", 10);

function myFunction3() {
    document.getElementById("kitty").innerHTML = "Mittens is a " +
    Mittens.Animal_Breed +  Mittens.Animal_Species + " who is " +
    Mittens.Animal_Age + " years old.";
}

