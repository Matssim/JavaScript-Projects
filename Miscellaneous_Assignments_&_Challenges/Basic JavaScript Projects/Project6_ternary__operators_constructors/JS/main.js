function Ride_Function() { //Establishes the function to be called by the event handler
    var Height, Can_ride; //Establishes "Height" and "Can_ride" as variables 
    Height = document.getElementById("Height").value; //Calls the value of the "Height" input element from the HTML file and assigns it to the "Height" vaiable in this function 
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //Establishes the value of the "Can_ride" variable, by calling and equating the value of the "Height" variable to a given number (52 in this case), and sets the corresponding string (lef/right of the operator) of the larger value as the value of the Can-ride variable
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Tells elements with the "Ride" id assigned to display the function output, i.e the output of the "Can_ride" variable + the given string
}

function Ride(Name, Park, Location) { //Establishes the "Ride" object contructor to be called by the "RideInfo" function
    this.Ride_Name = Name; //Establishes a placeholder variable to represent the value of the "Name" variable
    this.Ride_Park = Park; //Establishes a placeholder variable to represent the value of the "Park" variable
    this.Ride_Location = Location;  //Establishes a placeholder variable to represent the value of the "Loaction" variable
}
var SplashMt = new Ride("Splash Mountain", "Disneyland", "Anaheim, CA"); //Uses the "Ride" consturcutor to create the "SplashMt" object and assigns values to the object's variables(Name, Park, Location)
function RideInfo() { //Establishes the function to be called by the event handler
    document.getElementById("New_and_This").innerHTML = SplashMt.Ride_Name + 
    " is a ride at " + SplashMt.Ride_Park + " located in " + SplashMt.Ride_Location; //Tells elements with the "New_and_This" id assigned to display the function output, i.e calling the vaiables of the "SplasMt" object and displaying variables' values among the given strings
}

function queue_Function() { //Establishes the function to be called by the event handler
    function Queuetotal() { //Establishes the function to be called by the "document.getElementById()" method when the queue_Function is called
        var People_in_queue = 25; //Establishes the People_in_queue varible and assigns it a value (25 in this case) 
        function Add_person() {People_in_queue += 1;} //Establishes the "Add_person" to be called by the "Queuetotal" function, adding 1 to the existing value of the "People_in_queue" variable  
        Add_person(); //Nests the "Add_person()" function within itself to be given further attributes
        return People_in_queue; //Establishes the changed value of the "People_in_queue" as the output for the "Add_person" function, and consequently the "Queuetotal" function, once the "Add_person" function has been performed on the initial "People_in_queue" variable (increasing it's value by 1) 
    }
    document.getElementById("Nested_Function").innerHTML = "Your number in queue is: " + Queuetotal(); //Tells elements with the "Nested_Function" id assigned to display the "queue_Function()" output, i.e the given string + the output of the "Queuetotal" function
}
