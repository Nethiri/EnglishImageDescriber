let TBcontent = {};
let ImgUrlLink = undefined;
let intervallRunning = 0;

function placeSelect() {
    let typeSelect = createTypeSelect(["Picture", "Graph", "Code"]);
    typeSelect.id = "TypeSelect";
    document.getElementById("TypeSelectorPlace").innerHTML = "";
    document.getElementById("TypeSelectorPlace").appendChild(typeSelect);

    if(intervallRunning == 1) return; 
    setInterval(fillTBwithInitialContent, 100);
    intervallRunning = 1;
}

function placeLinkReader() {
    let LinkInput = document.createElement("input");
    let LaunchButton = document.createElement("button");
    //LaunchButton.onclick = function() { userTask(); }
    LaunchButton.innerHTML = "Lets go!"
    LaunchButton.id = "LaunchButton";
    LinkInput.id = "LinkTextBox";
    if(ImgUrlLink != undefined){
        LinkInput.value = ImgUrlLink;
    }
    //LinkInput.addEventListener("change", function() {userTask()});
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
    switch(document.getElementById("TypeSelect").value) {
        case "Picture":
            return userTasks.graph();
        case "Graph":
            return "ToDo Graph";
        case "Code": 
            return "ToDo Code";
    }
}

function TBonChange(tb) {
    TBcontent[tb.id] = tb.value;
}

function fillTBwithInitialContent() {
    let list = document.getElementsByTagName("textarea")
    for(let e of list) {
        if(TBcontent[e.id]==undefined) continue;
        if(e.hasMYinit) continue;
        e.value = TBcontent[e.id];
        e.hasMYinit = true;
    }
}

function TextEditor() {
    let placediv = document.getElementById("TextEditor");
    placediv.innerHTML = "";

    let keys = Object.keys(TBcontent);

    for(let k of keys) {
        let textDiv = document.createElement("div");
        textDiv.innerHTML = TBcontent[k];
        textDiv.ondblclick = function() {
            textDiv.innerHTML = "";
            let editor = document.createElement("textarea");
            editor.value = TBcontent[k];
            textDiv.appendChild(editor);
            editor.focus();
            editor.oninput = function() {TBcontent[k] = editor.value;}
            
            editor.addEventListener("focusout", function() {
                TBcontent[k] = editor.value;
                textDiv.innerHTML = TBcontent[k];
                textDiv.removeChild(editor);
            });
        }
        placediv.appendChild(textDiv);
    }
}

function TextCompress() {
    let str = "";
    let keys = Object.keys(TBcontent);
    for(let k of keys) {
        str = str + TBcontent[k] + "    \n";
    }
    return str;
}

function PlacePrinter() {
    let btn = document.createElement("button");
    btn.innerHTML = "Print";
    document.getElementById("Printer").innerHTML = "";
    document.getElementById("Printer").append(btn);
    //todo
}

function PrintDocument() {
    //todo
}

function PlaceSaver() {
    let btn = document.createElement("button");
    btn.onclick = function() {
        DownloadFile();
    };
    btn.innerHTML = "Download here!";
    document.getElementById("Saver").innerHTML = "";
    document.getElementById("Saver").appendChild(btn);
}

function DownloadFile() {
    let dataheap = {
        "source" : ImgUrlLink,
        "text" : TBcontent
    };

    let json = JSON.stringify(dataheap);
    json = [json];
    let blob1 = new Blob(json, {type: "text/plain, charset=utf8"});
    let isIE = false;
    if(isIE) {
        window.navigator.msSaveBlob(blob1, "ImageDiscriber.json");
    } else {
        let url = window.url || window.webkitURL;
        link = url.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "ImageDiscriber.json";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}