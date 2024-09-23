function pet_dictionary() { //Establishes the dictionary to be called on by the event handler
    var Esme = { //Establishes the dictionary as a variable
        Species: "Dog", //Establishes KVP
        Breed: "Chihuahua-Dachshund-mix ", //Establishes KVP
        Weight: "15 lbs", //Establishes KVP
        Age: 5, //Establishes KVP
    };
    delete Esme.Age; //Removes "Age"-KVP from dictionary 
    document.getElementById("Dictionary").innerHTML = "Breed: " + Esme.Breed + ". Age: " + Esme.Age; //Displays the defined KVPS relative to quotations, in elements with the "Dictionary" id
}