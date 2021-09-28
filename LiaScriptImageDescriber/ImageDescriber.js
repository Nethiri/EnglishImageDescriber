const TBcontent = {};
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