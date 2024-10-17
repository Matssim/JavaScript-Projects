function Call_Loop() { //Establishes the function to be called by the event handler
    var counter = ""; //Declares the "counter" variable and assigns it an empty value (making it start from a blank space, rather than displaying "undefined")
    var x = 10; //Declares the "x" variable and assign it a value of 10
    while (x > 0) { //Establishes a loop that will continue as long as the value of "x" is larger than 0
        counter += " " + x; //Adds a space between each iteration of the loop and displays the value of "x" current to that iteration
        x--; //Decrements (subtracts by 1) the value of "x"
    }
    document.getElementById("Loop").innerHTML = counter; //Displays the value of "counter" (i.e. each number counting down from 10 to 0) to elements with the "Loop" id
}


function for_Loop() { //Establishes the function to be called by the event handler
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Establishes the "Instruments" array  
    var Content = ""; //Establishes the "Content" variable and assigns it an empty string value 
    var X; //Establishes the variable "X" 
    for (X = 0; X < Instruments.length; X++) { //Sets the for loop when the value of "X" is 0 (it's default) and/or when it's value is less than the total elements of the "Instruments" array and/or the value of "X" is incremented (increased by 1)
    Content += Instruments[X] + "<br>"; //Adds the "X" iteration, i.e. any and all elements on the "Instruments" array to the "Content" variable with a line break after each element, as long as the paramteres of the loop are met
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //Displays the value of the "Content" variable in elements with the "List_of_Instruments" id
}

function array_Function() { //Establishes the function to be called by the event handler
    var dog_activity = []; //Establishes the "dog_activity" array
    dog_activity[1] = "eating breakfast"; //Establishes an element of the array, with a index number and a string value
    dog_activity[2] = "going on a walk";
    dog_activity[3] = "eating dinner";
    dog_activity[4] = "sleeping";
    document.getElementById("Array").innerHTML = "At noon, the dog is " + dog_activity[2] + "."; //Displays the value of the second element in the array between two given stings
}

const Esme = {petType:"dog", breed:"Chihuahua-Dachsund mix", weight: "14 lbs"} //Establishes "Esme" as a global constant, assigns properties and values of those properties

function constant_function() { //Establishes the function to be called by the event handler
    document.getElementById("Constant").innerHTML = "Esme is the name of my " + Esme.petType; //Displays the global value of the "petType" property for the "Esme" constant in elements with the "Contstant" id (Note: will be overwritten by the below code)
    Esme.weight = "15 lbs"; //Sets a new local value for the "weight" attribute of the "Esme" constant  
    Esme.age = "5 years"; //Adds the local "age" attribute for the Esme constant and assigns it a string value
    document.getElementById("Constant").innerHTML = "Esme is " + Esme.age + " old and since she gained some wieght she is now " + Esme.weight; //Displays the local attibutes' values between the given strings in elements with the "Constant" id
}

var Z = 16; //Establishes the global variable Z and assigns it a value of 16

function let_variable() { //Establishes the function to be called by the event handler
    let Z = 14 //Establishes a block variable Z and assigns it a value of 14, overriding the global "Z" variabel for operatins in within this function's {}, but not outside
    var X = 10 //Establishes the local variable X and assigns it a value of 10
    document.getElementById("let_output").innerHTML = Z + X; //Displays the value of the variables added together
}

let car = { //Establishes the global "car" object
    make: "Volvo ", //Assigns a property and a corresponding value 
    model: "XC60 ",
    year: "2016 ",
    color: "black ",
    description : function() { //Establishes a nested function of the car object
        return "My car is a " + this.year + this.color + this.make + this.model; //Returns a string and all the property values when the object is called 
    }
};

function get_car() { //Establishes the function to be called by the event handler
document.getElementById("my_car").innerHTML = car.description() //Displays the "description" return function of the "car" object in elements with the "my_car" id 
}