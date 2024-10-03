function form_validation() { //Establishes the function to be called by the event handler
    let X = document.forms["contact_form"]["fname", "lname", "email"].value; //Declares the "X" variable, retrives the value of the given elements by id from the form and assign them as the value of "X"
    if (X == "") { //Sets the conditional statement for when the value of "X" is nothing, i.e. if any of the form input fields are empty 
        alert("Please make sure to fill out all fields to submit request"); //Displays the given string in an alert box 
        return false; //Returns the false function output, i.e. posts the alert defined above
    }
}