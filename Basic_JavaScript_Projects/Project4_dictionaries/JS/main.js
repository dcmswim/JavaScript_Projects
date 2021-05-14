function my_Dictionary() { //defines dictionary
    var Animal = { //defines variable
        Species: "Cat", //KVP
        Color: "Orange", //KVP
        Breed: "Tabby", //KVP
        Age: 3, //KVP
        Name: "Mittens", //KVP
        Sound: "Meow", //KVP
    };
    delete Animal.Sound; //deletes KVP "Animal.Sound"
    document.getElementById("Dictionary").innerHTML = Animal.Name; 
    document.getElementById("Dictionary2").innerHTML = Animal.Sound;
    
}