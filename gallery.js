function upDate(previewPic) {

    let imageUrl = "url('" + previewPic.src + "')";

    document.getElementById('image').style.backgroundImage = imageUrl;

    document.getElementById('image').innerHTML = previewPic.alt;

}

function unDo() {
    
    document.getElementById('image').style.backgroundImage = "url('')";
    
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";

}

function greeting() {

    let name = prompt("Whats your name?");

    let greetingh1 = document.querySelector("Header h1");

    if (name !== null && name !== "") {

        greetingh1.textContent = "Hello, " + name + "!";

    }

}