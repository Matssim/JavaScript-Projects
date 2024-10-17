function getReciept() {
    //This initializes our string so it can get passed from 
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; 
    var runningTotal = 0;
    var sizeTotal = 0; 
    var sizeArray = document.getElementsByClassName("size"); //Retrives the size selection, declares it as an array variable and initilizes the selection as its value
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {//These conditions sets the $ value for the selected size of pizza
        sizeTotal = 6;
    } else if (selectedSize === "Calzone") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //Declares a variable for the base selection and initializes its value to be passed as an argument for the toppings function below
    console.log(selectedSize+" = $"+sizeTotal+".00"); 
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //Retrives the topping selections, declares it as an array variable and initilizes the selections as its value
    for (var j = 0; j < toppingArray.length; j++) { 
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length; 
    if (toppingCount > 1) { //These conditons adds 1$ for each selected topping
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount); //These functions displays the selections and their correpsonding values added to the total $ amount in the console
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1; //These functions displays the selections and their correpsonding values added to the total $ amount on the page
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

//Form Challenge//
function ValidateForm() {
    let x = document.forms["CtcForm"]["form_input"].value;
    if (x == "") {
        alert("Please enter your phone number");
        return false;
    }
}