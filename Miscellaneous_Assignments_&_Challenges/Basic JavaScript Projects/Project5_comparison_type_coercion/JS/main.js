document.write(typeof 14); //Tells the browser to display the data type of the given variable 

document.write("14" + 16); //Tells the browser to display the value of a variable combining different data types  

function infinity() { //Establishes the function to be called by the event handler
    document.getElementById("infinite").innerHTML = 1.7976931348623157E309; //Establishes the output "infinity" for elements with the "infinite" id, because the given value is larger than the largest alowable number in js  
}

function infinity_negative() { //Establishes the function to be called by the event handler
    document.getElementById("infinite_negative").innerHTML = -1.7976931348623157E309; //Establishes the output "-infinity" for elements with the "infinite_negative" id, because the given value is lower than the lowest alowable number in js
}

function boolean_test1() { //Establishes the function to be called by the event handler
    document.getElementById("boolean_false").innerHTML = 16 < 14; //Establishes the boolean value of the given formula  as the output for elements with the "boolean_false" id
}

function boolean_test2() { //Establishes the function to be called by the event handler
    document.getElementById("boolean_true").innerHTML = 16 > 14; //Establishes the boolean value of the given formula as the output for elements with the "boolean_true" id
}

console.log(16 + 14); //Tells the browser to display the value of the formula in the browser's console log

console.log(16 < 14); //Tells the browser to display the boolean value of the formula in the browser's console log

console.log(16 == 16); //Tells the browser to display the value of the comparison in the browser's console log

console.log(16 == 14); //Tells the browser to display the value of the comparison in the browser's console log

function true_test() { //Establishes the function to be called by the event handler
    var x = 16; //Establishes the value of variable x
    var y = 16; //Establishes the value of variable y
    document.getElementById("true").innerHTML = x === y; //Establishes the boolean value of comparing the variables, as the output for elements with the "true" id
}

function eq_false_test() { //Establishes the function to be called by the event handler
    var x = 16; //Establishes the value of variable x
    var y = "fourteen"; //Establishes the string value of variable y
    document.getElementById("eq_false").innerHTML = x === y; //Establishes the boolean value of comparing the variables of different data types, as the output for elements with the "eq_false" id
}

function dif_false_test() { //Establishes the function to be called by the event handler
    var x = 16; //Establishes the value of variable x
    var y = "sixteen"; //Establishes the string value of variable y
    document.getElementById("dif_false").innerHTML = x === y; //Establishes the boolean value of comparing the variables of different data types, as the output for elements with the "dif_false" id
}

function false_test() { //Establishes the function to be called by the event handler
    var x = 16; //Establishes the value of variable x
    var y = 14; //Establishes the value of variable y
    document.getElementById("false").innerHTML = x === y; //Establishes the boolean value of comparing the variables, as the output for elements with the "false" id
}

function true_and_true() { //Establishes the function to be called by the event handler
    var x = 14 < 16; //Establishes the value of variable x
    var y = 16 < 18; //Establishes the value of variable y
    document.getElementById("true&true").innerHTML = x && y;
}

function false_and_false() { //Establishes the function to be called by the event handler
    var x = 14 > 16; //Establishes the equation of variable x
    var y = 16 > 18; //Establishes the equation of variable y
    document.getElementById("false&false").innerHTML = x && y; //Establishes the shared boolean value (by comparing the booelan value of each variable), as the output for elements with the "false&false" id
}

function true_or_true() { //Establishes the function to be called by the event handler
    var x = 14 < 16; //Establishes the equation of variable x
    var y = 16 < 18; //Establishes the equation of variable y
    document.getElementById("true-true").innerHTML = x || y; //Establishes the boolean value "true" (if that is the booelan value of either variable), as the output for elements with the "true-true" id
}

function false_or_false() { //Establishes the function to be called by the event handler
    var x = 14 > 16; //Establishes the equation of variable x
    var y = 16 > 18; //Establishes the value of variable y
    document.getElementById("false-false").innerHTML = x || y; //Establishes the shared boolean value (by comparing the booelan value of each variable), as the output for elements with the "false-false" id
}

function not_test1() { //Establishes the function to be called by the event handler
    document.getElementById("not_false").innerHTML = !(16 < 14); //Establishes the booelean value (by testing if the given equation is false), as the output for elements with the "not_false" id
}

function not_test2() { //Establishes the function to be called by the event handler
    document.getElementById("not_true").innerHTML = !(16 > 14); //Establishes the booelean value (by testing if the given equation is false), as the output for elements with the "not_true" id
}