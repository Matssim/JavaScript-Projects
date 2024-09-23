function function_1() {
    var addition = 14 + 16;
    document.getElementById("addition").innerHTML = "14 + 16 = " + addition;
}

function function_2() {
    var subtraction = 16 - 14;
    document.getElementById("subtraction").innerHTML = "16 - 14 = " + subtraction;
}

function function_3() {
    var multiplication = 16 * 14;
    document.getElementById("multiplication").innerHTML = "16 x 14 = " + multiplication;
}

function function_4() {
    var division = 16 / 4;
    document.getElementById("division").innerHTML = "16 / 4 = " + division;
}

function function_5() {
    var math = (16 - 14) * 5 / 2 + 5;
    document.getElementById("math").innerHTML = "(16 - 14) * 5 / 2 + 5 = " + math;
}

function function_6() {
    var modulus = 16 % 5;
    document.getElementById("modulus").innerHTML = "The modulus of 16 / 5 is " + modulus;
}

function function_7() {
    var x = 14;
    document.getElementById("negation").innerHTML = "Negative 14 = " + -x;
}

function function_8() {
    var x = 16;
    x++;
    document.getElementById("increment").innerHTML = "16 incremented = " + (x);
}

function function_9() {
    var x = 5
    x--;
    document.getElementById("decrement").innerHTML = "5 decremented = " + (x);
}

function function_10() {
    var random = Math.random() * 20;
    document.getElementById("random").innerHTML = random;
}

function function_11() {
    var roundup = Math.ceil(15.7);
    document.getElementById("roundup").innerHTML = "15.7 rounded up = " + roundup;
}