const TextBoxArray = []
// https://printjs.crabbly.com/ <------------------------------------------- PRINT


function loadImage() {
    let place = document.getElementById("placeholder");
    place.innerHTML = ""
    let link = document.getElementById("textInputfield").value;
    //alert(link);
    let myImage = document.createElement("img");
    myImage.src = link;
    place.appendChild(myImage);
}

function createTextBox(beschreibung) {
    let ret = document.createElement("div");
    let beschreibungsfeld = document.createElement("div");
    let textfeld = document.createElement("textarea");
    textfeld.onchange = function() {
        //todo
    }
    beschreibungsfeld.innerHTML = beschreibung;

    ret.appendChild(beschreibungsfeld);
    ret.appendChild(textfeld);
    TextBoxArray.push(ret);
    return ret;    
}








