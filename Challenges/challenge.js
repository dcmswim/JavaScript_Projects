function validateForm() {
    var x = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Please include a phone number");
        return false;
    }
    var y = document.forms["myForm"]["fname"].value;
    if (y == "") {
        alert("Please include your first name");
        return false;
    }
    var z = document.forms["myForm"]["lname"].value;
    if (z == "") {
        alert("Please include your last name");
        return false;
    }
}