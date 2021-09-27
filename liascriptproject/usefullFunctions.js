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
        ProgramSelect = select.value;
    }
    for(let i = 0; i < args.length; i++) {
        let opt = document.createElement("option");
        opt.value = args[i];
        opt.appendChild(document.createTextNode(args[i]));
        select.appendChild(opt);
    }
    return select;
}

function insertImage() {
    if(TheImage.src == "") {
        TheImage.src = testSRC;
    }   
    myImg = document.getElementById("ImageLocation");
    myImg.src = TheImage.src;
}

function loadImage(link) {
    if(!link) {
        alert("Please insert a link into the Textbox next to this button to proceed.");
        return;
    }
    try{
        TheImage.src = link;
    } 
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

function createEditableText(text) {
    let div = document.createElement("Div");
    div.innerHTML = text;
    //todo...
    return div;
}