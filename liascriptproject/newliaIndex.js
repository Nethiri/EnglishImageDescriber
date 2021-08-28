// constants
testSRC = "https://i.pinimg.com/originals/38/b0/c7/38b0c7ff528df3d3f8f5e2799d507063.jpg"

// global variables
let ImageLink = undefined; //Link to the image
let ProgramSelect = "Picture"; //Select Status - Picture, Graph, Code, ... standart Picture
let TheImage = document.createElement("img");

let TextBoxContent = [];
let textbox1test = undefined;



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
    let StatusSelect = createTypeSelect([ProgramSelect, "Picture", "Graph", "Code"])
    StatusSelect.id = "StatusSelector";
    let fileSelector = CreateFileSelector();   
    button.innerHTML = "Load Image";
    button.addEventListener("click", function() { loadImage(LinkInput.value); })
    AppendToID("LoadImage", [button, LinkInput, StatusSelect]);
    AppendToID("LoadProject", fileSelector);
}

function PageTwoScript() {
    let location = document.getElementById("Task1");
    let TB = document.getElementById("DescrPart1");
    if(ProgramSelect == "Picture") {
        location.innerHTML = descriptionType.picture(1);
    }
    TB.addEventListener("input", function() {
        textbox1test = TB.value;
    })



}