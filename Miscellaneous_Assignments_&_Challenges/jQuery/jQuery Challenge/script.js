$(document).ready(function() {

    $("#btn").click(function(){
        document.getElementById("output").innerHTML = "Hello, World!";
    });

    $('#image').on({
        mouseenter: function () {
            $('#image').fadeOut(3000);
        }
    });
})