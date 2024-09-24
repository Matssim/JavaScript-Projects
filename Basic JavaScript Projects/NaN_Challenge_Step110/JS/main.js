function test_1() {
    document.getElementById("test1").innerHTML = 0/0;
}

function test_2() {
    document.getElementById("test2").innerHTML = isNaN("paragraph");
}