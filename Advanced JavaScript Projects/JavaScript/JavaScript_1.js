function appointment_function() { //Establishes the function to be called by the event handler
    var day_output; //Establishes a variable for the output value
    var days = document.getElementById("day_input").value.toLowerCase(); //Retrieves the user input value, converts is to lower case (to override user case), and assign it to the "days" variable
    var day_confirmed = " it is. See you then!"; //Establishes a string value to be added to the given output value 
    switch(days) { //Establishes a switch statement for the input provided by the "days" variable
        case "monday": //Establishes an operational case to handle a given input 
            day_output = "Monday" + day_confirmed; //Establishes the output for the given case
        break; //Ends/wraps up the case
        case "tuesday":
            day_output = "Tuesday" + day_confirmed;
        break;
        case "wednesday":
            day_output = "Wednesday" + day_confirmed;
        break;
        case "thursday":
            day_output = "Thursday" + day_confirmed;
        break;
        case "friday":
            day_output = "Friday" + day_confirmed;
        break;
        default: //Establishes the deafult output, for when the user input doesn't trigger any of the switch cases listed above (if the input is "Saturday", if it's misspelled etc.)
            day_output = "Please select one of the available days, as listed above"  
    }
    document.getElementById("output").innerHTML = day_output; //Displays the output value to elements with the "output" id
}

function select_sample_edit() { //Establishes the function to be called by the event handler
    var X = document.getElementsByClassName("text_class"); //Retrieves the class and assigns it to the "X" variable
    X[2].innerHTML = "This is the selected sample"; //Displays the the given string to elements in the class assigned to "X"("text_class") with the given index ([2] in this case, aka. the third element) 
}

function clr_can() {
    var can = document.getElementById("canvas1");
    var dim = can.getContext("2d");
    //Creates gradient
    var gradient = dim.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    //Fills inn gradient (box within canvas)
    dim.fillStyle = gradient;
    dim.fillRect(20, 20, 150, 100);
}