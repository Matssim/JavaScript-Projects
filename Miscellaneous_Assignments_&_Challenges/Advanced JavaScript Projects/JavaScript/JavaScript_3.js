function displayCapital(country) { //Establishes the function to be called by the event handler and specifies the "country" parameter, which specifies the function output to the element that call it   
    var countryCapital = country.getAttribute("data-country-capital"); //Declares the output variable "countryCapital" and retrieves the HTML data to assign it's value
    alert(country.innerHTML + "'s capital is " + countryCapital); //Displays the country and capital as the answer in an alert box 
}