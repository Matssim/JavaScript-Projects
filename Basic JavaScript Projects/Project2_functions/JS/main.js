function function_1() { //Establishes the first function
    var A = 2; //Establishes the value of variable A
    var B = 3; //Establishes the value of variable B
    document.getElementById("js_output_1").innerHTML = A+B; //Establishes the output of the function, in this case by adding variables A and B
}

function function_2() { ////Establishes the second function
    var string1 = "This is ist the first part of the concatenated string - "; //Establishes the value of the string variable
    string1 += "And this is the second part of the concatenated string"; //Concatenates the sting variabel with a free-standing string
    document.getElementById("js_output_2").innerHTML = string1; //Establishes the output of the function, in this case, two concatenated strings
}