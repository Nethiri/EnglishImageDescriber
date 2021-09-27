
function placeSelect() {
    let typeSelect = createTypeSelect(["Picture", "Graph", "Code"]);
    typeSelect.id = "TypeSelect";
    document.getElementById("TypeSelectorPlace").innerHTML = "";
    document.getElementById("TypeSelectorPlace").appendChild(typeSelect);
}

function placeLinkReader() {
    let LinkInput = document.createElement("input");
    let LaunchButton = document.createElement("button");
    LaunchButton.onclick = function() { userTask(); }
    LaunchButton.innerHTML = "Lets go!"
    LaunchButton.id = "LaunchButton";
    LinkInput.id = "LinkTextBox";
    LinkInput.addEventListener("change", function() {userTask()});
    document.getElementById("ImageLinkPlace").innerHTML = "";
    document.getElementById("ImageLinkPlace").appendChild(LinkInput);
    document.getElementById("ImageLinkPlace").appendChild(LaunchButton);
}

function placeFileReader() {
    let fileSelector = CreateFileSelector();
    document.getElementById("FileReaderPlace").innerHTML = "";
    document.getElementById("FileReaderPlace").appendChild(fileSelector);
}

function userTask() {
    document.getElementById("UserTaskPlace").innerHTML = "";


    switch(document.getElementById("TypeSelect").value) {
        case "Picture": 
            alert("Picture");
            break;

        case "Graph":
            alert("Graph");
            break;
        case "Code": 
            alert("Code");
            break;
    }
    
    
    let mystring = `
Attention
=========

To capture the attention of your readers, you should start with a good introduction phrase(s).

Here are some examples you may use:

* If you look at this picture, you will see... 
* In the picture you can see...  
* The picture shows...
    
<button type="button">Click Me!</button> 

`
    return mystring;
}
