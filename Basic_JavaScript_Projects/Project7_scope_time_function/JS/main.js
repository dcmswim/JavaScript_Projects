var Z = 100;

function Add_Nums1() { //this function works because X is a local variable defined within the function
    var X = 10; //defines variable and assigns value
    document.write(X + 50 + "<br>"); //<br> added to make numbers look cleaner when displayed in browser
}

function Add_Nums2() { //defines function - adds 2 nums 
    document.write(50 + 50 + "<br>");
}

function Add_Nums3() { //this function works because Z is a global variable defined previously
    document.write(Z + 50 + "<br>"); //adds global variable and num
}

function get_Date() { //displays different message depending on local time
    if (new Date().getHours() < 18 && new Date().getHours() >= 12) {
        document.getElementById("Greeting").innerHTML = "How are you this afternoon?";
    }
    else if (new Date().getHours() >= 4 && new Date().getHours() <= 11) {
        document.getElementById("Greeting").innerHTML = "How are you this morning?"
    }
    else if (new Date().getHours() >= 18 && new Date().getHours() <= 22) {
        document.getElementById("Greeting").innerHTML = "How are you this evening?"
    }
    else document.getElementById("Greeting").innerHTML = "It's getting late...probably time for some rest."
}

function age_Function() { //defines function that displays an output based on user age input
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        Eligible = "You are old enough to rent a car!";
    }
    else {
        Eligible = "You are too young to rent a car.";
    }
    document.getElementById("current_age").innerHTML = Eligible;
}

function Time_Function() { //displays a message based on local time (this method seems less complicated than my previous time function)
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is currently morning." ;
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is currently afternoon" ;
    }
    else {
        Reply = "It's night time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

Add_Nums1(); //calls function
Add_Nums2();
Add_Nums3();

if (1 < 2) { //example of if statement
    document.write("Number on the left is smaller than the number on the right" + "<br>")
}




