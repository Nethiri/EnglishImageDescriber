// constants
testSRC = "https://i.pinimg.com/originals/38/b0/c7/38b0c7ff528df3d3f8f5e2799d507063.jpg"

// global variables
let ImageLink = undefined; //Link to the image
let ProgramSelect = "Picture"; //Select Status - Picture, Graph, Code, ... standart Picture
let TheImage = document.createElement("img");

let TBContent = [ "" , "" , "" , "", "" ]




// code
function PageOneScript() {
    //ClearID(["LoadImage", "LoadProject"])
    // the first page mainly contains 4 works elements
    // a button and a link input, to load an image link from a website and a select to discribe which state next to load
    // and a file selector which loads unfishished workfiles into the website
    let button = document.createElement("button");
    let LinkInput = document.createElement("input");
    LinkInput.id = "LinkBox"
    LinkInput.value = testSRC;
    let StatusSelect = createTypeSelect(["Picture", "Graph", "Code"])
    StatusSelect.id = "StatusSelector";
    let fileSelector = CreateFileSelector();   
    button.innerHTML = "Load Image";
    button.addEventListener("click", function() { 
        //alert("Ich wurde geklickt!");
        loadImage(LinkInput.value); 
        window.location = "http://localhost:3000/liascript/index.html?http://localhost:3000//liamarkdownfike.md#2";
    })
    AppendToID("LoadImage", [button, LinkInput, StatusSelect]);
    AppendToID("LoadProject", fileSelector);
}

function PageDescriptionScript(textbox, task, num, taskLocation) {
    let taskElement = document.getElementById(taskLocation);
    let textBoxElement = document.getElementById(textbox);
    textBoxElement.innerHTML = TBContent[num];
    textBoxElement.addEventListener("input", function() {
        TBContent[num] = textBoxElement.value;
    })
    if(task == "Picture") {taskElement.innerHTML = descriptionType.picture(num);}
    if(task == "Graph") {taskElement.innerHTML = descriptionType.graph(num);}
    if(task == "Code") {taskElement.innerHTML = descriptionType.code(num);} 
}