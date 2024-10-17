function getNumberFact() {
    fetch('http://numbersapi.com/random/trivia')
        .then(response => response.text())
        .then(fact => {
            document.getElementById('NmbFactDisplay').textContent = fact;
        })
        .catch(error => {
            document.getElementById('NmbFactDisplay').textContent = "Error fecthing fact.";
        });
}

function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.text())
        .then(fact => {
            document.getElementById('CatFactDisplay').textContent = fact;
        })
        .catch(error => {
            document.getElementById('CatFactDisplay').textContent = "Error fecthing fact.";
        });
}

function getDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.image())
        .then(fact => {
            document.getElementById('DogPicDisplay').imageContent = fact;
        })
        .catch(error => {
            document.getElementById('DogPicDisplay').imageContent = "Error fecthing picture.";
        });
}