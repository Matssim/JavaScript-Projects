function capitalizeText() {
    let text = document.getElementById('test').innerHTML;
    let output = text.toUpperCase();
    document.getElementById('test').innerHTML = output;
}