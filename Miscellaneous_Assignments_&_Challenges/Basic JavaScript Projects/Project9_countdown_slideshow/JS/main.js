function countdown() { //Establishes the function to be called by the event handler
    var seconds = document.getElementById("seconds").value; //Calls the input element with the "seconds" id and assigns it to the function's "seconds" variable

    function tick() { //Establishes the "tick" sub-routine/function 
        seconds = seconds - 1; //Tells the function to subtract the value of the "seconds" variable by 1 when referenced going forward
        timer.innerHTML = seconds; //Tells the browser to display the value of the "seconds" variable in elements with the "timer" id 
        var time = setTimeout(tick, 1000); //Establishes the variable time, which tells the "tick" function to halt for 1000 milliseconds(1 second) between each action, i.e between every time it subtracts the "seconds" value by 1
        if (seconds == -1) { //Establishes further action when the value of the "seconds" variable reaches -1 (i.e when the countdown is complete)
            alert("Time is up!"); //Tells the browser to display an alert window with the stated string
            clearTimeout(time); //Cancels the timeout operation on the "time" variable
            timer.innerHTML == ""; //Clears the value of elements with the "timer" id
        }
    }
    tick(); //Initiates the "tick" sub-routine/function 
}

let slideIndex = 1; //Establishes the global "slideIndex" variable and assigns it a value of 1
showSlides(slideIndex); //Tells the browser to initiate the "showSlides" function with the parameter of "slideIndex", i.e. start by displaying the first image

// Next/Previous controls
function plusSlides(n) { //Establishes the next/prev function by nesting the display funtion "showSlides" within it, with the "n"(current step) as the parameter
    showSlides(slideIndex += n); //Tells the "showSlides" function to run and concatenate the current state("n") with slideIndex, as the parameter, i.e. when an eventhandler (arrow button) is clicked  
}

// Thumbnail image controls
function currentSlide(n) { //Establishes the dot navigation function by nesting the display funtion "showSlides" within it, with the "n"(current step) as the parameter
    showSlides(slideIndex = n); //Tells the "showSlides" function to run and equates the current state("n") to "slideIndex", as the parameter, i.e. when an eventhandler (index dot) is clicked  
}

function showSlides(n) { //Establishes the display function
    let i; //Establishes the local "i" variable
    let slides = document.getElementsByClassName("mySlides"); //Establishes the "slides" variable and equates it to elements with the "mySlides" class assigned
    let dots = document.getElementsByClassName("dot"); //Establishes the "dot" variable and assigns it to elements with the "dot" class assigned
    if (n > slides.length) {slideIndex = 1} //Sets the value of the "slideIndex" variable to 1 once "n" (the current step of the operation) is larger than the array length of "slides", i.e. when we reach past the 3rd image, it will take us back to the first 
    if (n < 1) {slideIndex = slides.length} //Sets the value of the "slideIndex" variable to the length of the array once "n" is less than 1. i.e when go back further than the first picture it will take us to the last/3rd image
    for (i = 0; i < slides.length; i++) { //Establishes a for-loop when the variable "i" has the value of 0 and is smaller than the array length of "slides"(3, in this case), and the value of "i" is incremented. I.e. during any point in this function-->
        slides[i].style.display = "none"; //Makes sure the other image elements are not displaying at the same time as the one we're currently traversing
    }
    for (i = 0; i < dots.length; i++) { //Establishes the a for-loop as for the image display above, but for the dots indicating the postion in the array
        dots[i].className = dots[i].className.replace(" active", ""); //Removes the "active" styling of the dots  
    }
    slides[slideIndex-1].style.display = "block"; //Assigns the image element styling to the image we're currently traversing 
    dots[slideIndex-1].className += " active"; //References the styling of the dots and applies the "active" styling to the dot with corresponding array position as the image element currently being traversed
}