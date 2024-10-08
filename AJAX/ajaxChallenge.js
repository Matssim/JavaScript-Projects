function getRsp() { 

    let ajaxRequest = new XMLHttpRequest(); //Sets up the XML Requets object

    let inputName = document.getElementById("name").value; //Retrieves the user's name input

    ajaxRequest.onload = function(){ //Initializes the output response for the external Rsp message
        document.getElementById("introductionMsg").innerHTML = "Hi " + inputName + 
        "<br>Good to meet you!";
    }

    ajaxRequest.open('GET', 'ajaxChallengeRsp.html', true); //Establishes the request type and content

    ajaxRequest.onreadystatechange = function(){ //Establishes how to respond to the request and where to display it
        if(this.readyState === 4 && this.status === 200){ //4=Request is compete, 200 = Sucessful
            document.getElementById('introduction').innerHTML = ajaxRequest.responseText;
        }
    }

    ajaxRequest.send(); //Sends the request
}