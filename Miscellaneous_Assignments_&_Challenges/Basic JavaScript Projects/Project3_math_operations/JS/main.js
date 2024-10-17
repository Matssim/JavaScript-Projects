function function_1() { //Establishes addition function to be called when event handler in HTML is triggered
    var addition = 14 + 16; //Establishes the addition operation as a variable
    document.getElementById("addition").innerHTML = "14 + 16 = " + addition; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "addition" id 
}

function function_2() { //Establishes subtraction function to be called when event handler in HTML is triggered
    var subtraction = 16 - 14; //Establishes the subtraction operation as a variable
    document.getElementById("subtraction").innerHTML = "16 - 14 = " + subtraction; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "subtraction" id
}

function function_3() { //Establishes multiplication function to be called when event handler in HTML is triggered
    var multiplication = 16 * 14; //Establishes the multiplication operation as a variable
    document.getElementById("multiplication").innerHTML = "16 x 14 = " + multiplication; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "multiplication" id
}

function function_4() { //Establishes division function to be called when event handler in HTML is triggered
    var division = 16 / 4; //Establishes the division operation as a variable
    document.getElementById("division").innerHTML = "16 / 4 = " + division; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "division" id
}

function function_5() { //Establishes the multiple operation function to be called when event handler in HTML is triggered
    var math = (16 - 14) * 5 / 2 + 5; //Establishes the operation as the variable "math"
    document.getElementById("math").innerHTML = "(16 - 14) * 5 / 2 + 5 = " + math; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "math" id
}

function function_6() { //Establishes division function to be called when event handler in HTML is triggered
    var modulus = 16 % 5; //Establishes the modulus operation as a variable
    document.getElementById("modulus").innerHTML = "The modulus of 16 / 5 is " + modulus; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "modulus" id
}

function function_7() { //Establishes negation function to be called when event handler in HTML is triggered
    var x = 14; //Establishes the neagtion operation as a variable
    document.getElementById("negation").innerHTML = "Negative 14 = " + -x; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "negation" id
}

function function_8() { //Establishes increment function to be called when event handler in HTML is triggered
    var x = 16; //Establishes the variable vaule
    x++; //Establishes increment as the variable operation 
    document.getElementById("increment").innerHTML = "16 incremented = " + (x); //Performs the variable operation and displays the output after the quotation in elements that are assigned the "increment" id
}

function function_9() { //Establishes decrement function to be called when event handler in HTML is triggered
    var x = 5 //Establishes the variable vaule
    x--; //Establishes decrement as the variable operation 
    document.getElementById("decrement").innerHTML = "5 decremented = " + (x); //Performs the variable operation and displays the output after the quotation in elements that are assigned the "decrement" id
}

function function_10() { //Establishes random number function to be called when event handler in HTML is triggered
    var random = Math.random() * 20; //Establishes random number (between 0 and 20) as the variable operation 
    document.getElementById("random").innerHTML = random; //Performs the variable operation and displays the output in elements that are assigned the "random" id
}

function function_11() { //Establishes the round-up function to be called when event handler in HTML is triggered
    var roundup = Math.ceil(15.7); //Establishes rounding up by Math object (variable value in parenthesis) as the variable operation 
    document.getElementById("roundup").innerHTML = "15.7 rounded up = " + roundup; //Performs the variable operation and displays the output after the quotation in elements that are assigned the "roundup" id
}