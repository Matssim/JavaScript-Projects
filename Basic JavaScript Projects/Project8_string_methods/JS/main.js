function sentence_builder() { //Establishes the function to be called by the event handler
    var part1 = "Hello! "; //Establishes the first part of the sentence as a variable
    var part2 = "How are you? "; //Establishes the second part of the sentence as a variable
    var greeting = part1.concat(part2); //Establishes the full sentence as a variable by calling and concatenating the two other variables' string values
    document.getElementById("assembled_greeting").innerHTML = greeting; //Tells the browser to display the value of the "greeting" variable (i.e. the concatenated string) in elements with the "assembled_greeting" id
}

function get_slice() { //Establishes the function to be called by the event handler
    var FullSentence = "Can we help you?"; //Establishes the full sentence as a variable and assigns its string value
    var SentenceSlice = FullSentence.slice(0,11); //Establishes the "SentenceSlice" variable  and assigns the first 11 characters of the FullSentence variable (i.e. "Can we help"), as its string value
    document.getElementById("output_slice").innerHTML = SentenceSlice + "?"; //Tells the browser to display the value of the "SentenceSlice" variable and a separate string value for the question mark in elements with the "output_slice" id
}

function Upper_case() { //Establishes the function to be called by the event handler
    var output1 = document.getElementById("uppercase_output").innerHTML; //Establishes the "output1" variable and assigns the content of elements with the "uppercase_output" as its value
    document.getElementById("uppercase_output").innerHTML = output1.toUpperCase(); //Tells the browser to display the value of the "output1" variable in all uppercase letters, in elements the "uppercase_output" id
}

function search_string() { //Establishes the function to be called by the event handler
    var output2 = document.getElementById("string_position").innerHTML; //Establishes the "output2" variable and assigns the content of elements with the "string_position" as its value
    document.getElementById("string_position").innerHTML = 'The word "see" begins at the ' + (output2.search(/see/) + 1) + 'th character in the sentence'; //Tells the browser to display the first postion of the word "see" in the "output2" variable +1 (to account for 0 being the first position), between the given strings, in elements the "string_position" id
}

function number_string() { //Establishes the function to be called by the event handler
    var number1 = 2500; //Establishes the "number1" variable and assigns it a value 
    document.getElementById("nmbString").innerHTML = number1.toString(); //Tells the browser to display the numeric value of the "number1" variable as a string in elements with the "nmbString" id
}

function nmb_precision() { //Establishes the function to be called by the event handler
    var X = 41354.28984546792 //Establishes the "X" variable and assigns it a value 
    document.getElementById("precision").innerHTML = X.toPrecision(8); //Tells the browser to round up the value of the "X" variable in 8 figures total and display it in elements with the "precision" id
}

function fix_dec() { //Establishes the function to be called by the event handler
    var Y = 41354.28984546792 //Establishes the "Y" variable and assigns it a value 
    document.getElementById("fixed_dec").innerHTML = Y.toFixed(8); //Tells the browser to round up the value of the "Y" variable to 8 decimals and display it in elements with the "fixed_dec" id
}

function valueof_method() { //Establishes the function
    var Z = "This is a string" //Establishes the "Z" variabel and assigns it a string value 
    console.log(Z.valueOf()); //Tells the browser to display the value of the "Z" variable in the browser log
}
valueof_method() //Tells the browser to run the function