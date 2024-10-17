var dog = {name: "Esme", breed: "Chiuahua-Dachshund", color: "Black"};

var JSONstring = JSON.stringify(dog);
document.getElementById("myDog").innerHTML = JSONstring;

var JSONstringParsed = JSON.parse(JSONstring);
document.getElementById("dogName").innerHTML = "My dog's name is " + JSONstringParsed.name;

var dogString = '{"name": "Esme", "breed": "Chiuahua-Dachshund", "color": "Black"}';
var JSONstringParsedalt = JSON.parse(dogString);
document.getElementById("dogBreed").innerHTML = "My dog is a " + JSONstringParsedalt.breed;

localStorage.setItem("Color", "Black");
document.getElementById("dogColor").innerHTML = JSONstringParsed.name + " is a " + localStorage.getItem("Color") 
+ " " + JSONstringParsedalt.breed;