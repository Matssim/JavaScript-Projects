var X = 16; //Establishes X as a global variable and assigns it a value

function addition() { //Establishes the function 
    var Y = 14; //Establishes Y as a local variable to this function and assigns it a value
    document.write(X + Y); //Tells the browser to display the end value of adding together the local variable Y and the global variable X  
}

function subtraction() { //Establishes the function 
    var Y = 14; //Establishes Y as a local variable to this function and assigns it a value (added after debugging in browser console)
    document.write(X - Y); //Tells the browser to display the end value subtracting the local variable Y from the global variable X
    console.log(X - Y); //Tells the browser console to display the end value subtracting the local variable Y from the global variable X
}

addition() //Calls the function "addition()" to be executed
subtraction() //Calls the function "subtraction()" to be executed

function openhrs_check() { //Establishes the function to be called by the event handler
    var time = new Date().getHours(); //Establishes the variable "time" and assigns it's value by how many hours have passed in the current day when the function is called 
    var response; //Establishes the variable "response" without assigning a value
    if (time < 10 == time > 0) { //Sets the condition for assigning the below string value to the "response" variable: If the current time (as set by the "time" variable) is between midnight and 10:00 am
        response = "We're not open yet!"
    }
    else if (time >= 17) { //Sets the condition for assigning the below string value to the "response" variable: If the current time (as set by the "time" variable) is 05:00 om or later
        response = "We're closed for the day!"
    }
    else { //Sets the condition for assigning the below string value to the "response" variable: If neither of the above conditional statements are met, i.e. the time is between 10:00 am and 05:00 pm
    }
    document.getElementById("open").innerHTML = response; //Tells the browser to display the string value of "response" in elements with the "open" id
}

function capacity_check() { //Establishes the function to be called by the event handler
    if (document.getElementById("capacity_input").value < 14) { //Calculates whether the user input is larger/smaller than the given given capcity number (14 in this case) and tells the function to keep running as long as the input value is lower
        document.getElementById("capacity_output").innerHTML = "We have that in stock!" //Tells the browser to display the given string in elements with the capacity_output id, when the condition of the if-statement above is met
    }
    else { //Establishes the operation to be performed by the function when the above "if" statement is not met
        document.getElementById("capacity_output").innerHTML = "Sorry, we don't have that much in stock!" 
    }
}