// constants
testSRC = "https://i.pinimg.com/originals/38/b0/c7/38b0c7ff528df3d3f8f5e2799d507063.jpg"

// global variables
let ImageLink = undefined; //Link to the image
let ProgramSelect = "Picture"; //Select Status - Picture, Graph, Code, ... standart Picture
let TheImage = document.createElement("img");

// code
function PageOneScript() {
    ClearID(["LoadImage", "LoadProject"])
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
    ClearID(["ImageSpan"])
    //second page... 
    AppendToID("ImageSpan", TheImage)
}

function AppendToID(ID, args) { // return 1 error, return 0 all fine
    if(typeof(ID) == "string") {
        let target = document.getElementById(ID);
        if(args.length != undefined) {
            let er = 0;
            try{
                for(let i = 0; i < args.length; i++) {
                    er = i;
                    target.appendChild(args[i]);
                }
                return 0;
            }
            catch{
                console.log("ApphendToID has encountered an Error!");
                console.log("The attempt to apphend " + typeof(args[er]) + " to " + ID + " has failed.");
                return 1;
            }
        }
        try{
            target.appendChild(args);
            return 0;
        }
        catch{
            console.log("ApphendToId has encountered an Error!");
            console.log("The attempt to apphend " + typeof(args) + " to " + ID + " has failed.");
            return 1;
        }

    }
    console.log("ApphendtoName has encountered an Error!");
    console.log(ID + " is not an element ID of the website")
    return 1;
}

function CreateFileSelector() {
    let fileSelector = document.createElement("input");
    fileSelector.type = "file";
    fileSelector.defaultValue = "";
    fileSelector.onchange = function(e) {
        let fr = new FileReader();
        fr.onload = function(ev) {
            try{
                console.log(ev.target.result);
                let data = JSON.parse(ev.target.result);
                console.log(data);
                //function which reads the JSON file and puts the data into the correct places
                alert("ToDo - Contact Marco Naumann under marconaumann@t-online.de if you encounter this error, or via discord");
            }
            catch(ex){
                alert(ex);
            }
        }
        fr.readAsText(e.target.files[0]);
    }
    return fileSelector;
}

function createTypeSelect(args) {
    let select = document.createElement("select");
    select.onchange = function() {
        args[0] = select.value;
    }
    for(let i = 1; i < args.length; i++) {
        let opt = document.createElement("option");
        opt.value = args[i];
        opt.appendChild(document.createTextNode(args[i]));
        select.appendChild(opt);
    }
    return select;
}

function loadImage(link) {
    if(!link) {
        alert("Please insert a link into the Textbox next to this button to proceed.");
        return;
    }
    try{TheImage.src = link;} 
    catch(error) {
        alert("Something is wrong with the Image Link, and it could not be accepted.\nPlease check if that is a valid Link to an Image.");
        return;
    }
    //next page?!

}

function ClearID(args) {
    if(args.length != undefined) {
        for(let i = 0; i<args.length; i++) {
            try{
                obj = document.getElementById(args[i]);
                obj.innerHTML = "";
            }
            catch{
                console.log("Tried to ClearID on " + obj[i] + " which seems to not exist...")
            }
        }
        return;
    }
    try{
        obj = document.getElementById(args);
        obj.innerHTML = ""
    }
    catch{
        console.log("Tried to ClearID on " + obj + " which seems to not exist...")
    }


}