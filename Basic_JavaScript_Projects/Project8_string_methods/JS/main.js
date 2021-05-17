function full_Sentence() { //defines function - utilizes concat method
    var part_1 = "This is " ;
    var part_2 = "a complete " ;
    var part_3 = "sentence using " ;
    var part_4 = "the concatenate method." ;
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //defines function - utilizes slice function to only display selected portion of string
    var Sentence = "All work and no play makes Johnny a dull boy." ;
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

function search_Method() { //defines function - utilizes search to find starting position for a given value
    var sentence2 = "Display the starting position of the word potato in this string" ;
    var pos = sentence2.search("potato");
    document.getElementById("Find").innerHTML = pos;
}

function caps_Function() { //defines function - makes specific element appear in all caps when function called
    var text = document.getElementById("caps").innerHTML;
    document.getElementById("caps").innerHTML = text.toUpperCase();
}

function string_Method() { //defines function - utilizes toString method
    var X = 182;
    document.getElementById("nums_to_string").innerHTML = X.toString();
}

function precise_Method() { //defines function - utilizes toPrecision method to display number to a given number of places
    var X = 12958.3726184274487490274919;
    document.getElementById("precise").innerHTML = X.toPrecision(10);
}

function fixed_Method() { //defines function - utilizes toFixed method to display value with specified number of decimal places
    var X = 567.345678;
    var Y = X.toFixed(3);
    document.getElementById("fixed").innerHTML = Y;
}

function value_Method() { //defines function - utilizes valueOf method to display primitive data type (seems unneccesary in this case since this seems already built in?)
    var X = "Hello, World!";
    var Y = X.valueOf();
    document.getElementById("value_of").innerHTML = Y;
}

