const TextBoxArray = [];
const DivArray = [];
let Selecttype = "Bild";
let TheImage = document.createElement("img");
let TheText = undefined;
let WebSiteObjectArray = document.createElement("div");
let FunctionalTextArray = [];
let HumanInformationData = undefined;
let loadedfile = undefined;
// https://printjs.crabbly.com/ <------------------------------------------- PRINT
onload = function() {
    DivArray.push(Beginning());
}
function SetBody(div) {
    RestBody();
    document.getElementsByTagName("body")[0].appendChild(div);
}
function RestBody() {
    document.getElementsByTagName("body")[0].innerHTML = "";
}

function Beginning() {
    RestBody();
    let div = document.createElement("DIV");
    let button = document.createElement("button");
    let textBox = document.createElement("input");
    let HowToUse = document.createElement("label");
    let HowToSkip = document.createElement("label");

    let fileselector = document.createElement("input");
    fileselector.type = "file";
    fileselector.defaultValue = "";
    fileselector.onchange = function(e) {
        let fr = new FileReader();
        fr.onload = function(ev){
            try{
                console.log(ev.target.result);
                let data = JSON.parse(ev.target.result);
                console.log(data);
                TheText = data.text;
                HumanInformationData = data.human;
                TheImage.src = data.source;
                LastState();

            }   catch(ex){
                alert(ex);
            }
        }
        fr.readAsText(e.target.files[0]);
    }
    HowToSkip.innerHTML = "Or you can load an unfinished project by clicking below.";
    HowToSkip.style = "display: block;text-align: center;line-height: 150%;font-size: 1em;";

    HowToUse.innerHTML = "In order to use this tool, please insert a link to an image you'd like to describe below.";
    HowToUse.style = "display: block;text-align: center;line-height: 150%;font-size: 1em;"
    button.style ="width:90";
    textBox.style ="width:140";
    let select = document.createElement("select");
    select.style ="width:70;height:22";
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    let opt3 = document.createElement("option");

    opt1.value = "Bild";
    opt2.value = "Graph";
    opt3.value = "Code"
    opt1.appendChild(document.createTextNode("Picture"));
    opt2.appendChild(document.createTextNode("Graph"));
    opt3.appendChild(document.createTextNode("Code"));
    select.appendChild(opt1);
    select.appendChild(opt2);
    select.appendChild(opt3);
    select.onchange = function() {
        Selecttype = select.value
    }
    //
    button.innerHTML = "Load Image";
    button.addEventListener("click", function() {
        loadImage(textBox.value);
    });
    div.appendChild(HowToUse);
    div.appendChild(textBox);
    div.appendChild(button);
    div.appendChild(select);
    div.appendChild(HowToSkip);
    div.appendChild(fileselector);
    div.style = "position:fixed;z-index: 100;top:50%;left:47%;margin:-100px 0 0 -100px;width:300px;height:300px;"
    SetBody(div);
    return div;
}

function MidState() {
    RestBody();
    let div = document.createElement("DIV");
    TheImage.style = "display: block; margin-left: auto; margin-right: auto; width: 50%;"
    div.appendChild(TheImage);

    //image discriber...
    let imgBeschreibung = document.createElement("DIV");
    
    if(Selecttype === "Graph"){
        DiscribeMyGraph(imgBeschreibung);
        div.appendChild(imgBeschreibung);
    }
    else if(Selecttype === "Bild"){    
        DiscribeMyImage(imgBeschreibung);
        div.appendChild(imgBeschreibung);
    }
    else{
        DiscribeMyCode(imgBeschreibung);
        div.appendChild(imgBeschreibung);
    }
    //buttons
    let vorward = document.createElement("button");
    let backwards = document.createElement("button");
    vorward.innerHTML ="Continue";
    backwards.innerHTML ="Back";
    backwards.onclick = function() {Beginning();}
    vorward.onclick = function() {
        TheText = [];
        for(let entry of TextBoxArray){ TheText.push(entry.value);} 
        LastState();
    }  
    div.appendChild(backwards);
    div.appendChild(vorward);
    SetBody(div);
    
    return div;

}

function DiscribeMyImage(location) {    
    location.appendChild(createTextBox("To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>If you look at this picture, you will see...<br>In the picture you can see...<br>The picture shows...<br>"));
    location.appendChild(createTextBox("Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The image we are looking at has been painted/taken at...<br>When you look at the image, you can see that it is a black and white...<br>This picture is a... picture and has been taken by...<br>"));
    location.appendChild(createTextBox("Okay... we should now have finished the introduction of your description.<Br><Br>So, now please describe the picture and use phrases like:<br>In the foreground of the picture you will...<Br>In the background you can see that...<Br>In the right/left/center...<br>Between ... there is ...<br>At the top/At the bottom there is...<br>"));
    location.appendChild(createTextBox("Now we know what we see on the picture. Lets focus now on who is doing what or what is going on.<br><br>To take some examples:<br>The... is talking to...<br>... is gesturing to...<br>"));
    location.appendChild(createTextBox("So, that all is fine and dandy, lets now focus on what you are thinking... What do you think is the meaning of the picture?<br><br>Here are some examples:<br>It seems as if...<br>... might be a simbole of ... because...<br>I (don't) like ... because<br>... makes me think of ...<br>"));
}

function DiscribeMyGraph(location) {
    location.appendChild(createTextBox("To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>Let me show you this bar graph...<br>Let's turn to this diagram...<br>I'd like you to look at this map...<br>"));
    location.appendChild(createTextBox("Now that we have the attention of your reader, and we have a general understanding of what has been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The graph we are looking at has been published by...<br>The vertical axis shows...<br>Ther horizontal axis shows..."));
    location.appendChild(createTextBox("Okay... we should now have finished the introduction of your description.<br><br>Consider phrases like:<br>So, now please describe what you see and the meaning of the information displayed.<br>Each number are equivalent to 1 million...<br>The ... rises/increased/decreased/flattens...<br>The graph rapidly..."));
    location.appendChild(createTextBox("Okay... lets bring that baby home guys. Let us finish with the conclusion, and we are done here!<br><br>Here are some examples to use:<br>Overall, we can see that...<br>In the end, you'll see...<br>From this we can conclude...<br>"));
}

function DiscribeMyCode(location) {
    location.appendChild(createTextBox("Code descriptions are a bit more unorthodox than normal image descriptions.<br>So, what do we have to look for in a code description?<br><br>First of all, we have to figure out, what is this code specificly...<br><br>Here are some examples which may help you do just that:<br>Looking at the code(snipped) as a whole, you can see that...<br>This code(snipped) has been written in...<br>This code(snipped) is a ... which returns a ..."));
    location.appendChild(createTextBox("What is this code all about?<br>Discribe what you think it is used for, or where you have found it...<br><br>Some helpful examples:<br>The [...] uses this [...] for...<br>One might need this in...<br>When you are... you might need a function like this to..."));
    location.appendChild(createTextBox("Okay, furthermore, we have to now look at the code in more detail. What can you see?<br>This might be atchieved by looking at it line by line...<br><br>Here are some examples which might help you:<br>In the first line you can see that it is a call to a...<br>In Line [...] you can see, that variable [...] is defined with...<br>In the next line, the previouly defined... is used for..."));
    location.appendChild(createTextBox("Code is never perfect... have you spotted a mistake? Can't this code run at all because of it, or may the compiler throw out a warning...<br>Let's write about it, and remember 'Be the compiler'<br><br>Here are some examples which might help:<br>In Line [...], the pointer to the variable [...] is used instead of the...<br>The line has not been compleated and there is a [...] missing at the end.<br>The ... of the function is undefined..."));

}
//todo
// code fragment discription?
// ask zug?
function loadImage(link) { // todo
    if(!link){
        alert("Please insert a Link into the Textbox to proceed.");
        return;
    }    
    try{TheImage.src = link;}
    catch(error) {
        alert("Something wasnt Okay with that Image Link! Make sure it's a Link to an Image!");
    }
    // bla bla, if successful, go into next state
    MidState();
}

function createTextBox(beschreibung) {
    let ret = document.createElement("div");
    let beschreibungsfeld = document.createElement("lable");
    let textfeld = document.createElement("textarea");
    textfeld.style = "width:100%"
    textfeld.onchange = function() {
        //todo
    }
    beschreibungsfeld.innerHTML = beschreibung;

    ret.appendChild(beschreibungsfeld);
    ret.appendChild(textfeld);
    TextBoxArray.push(textfeld);
    return ret;    
}

function LastState() {
    let div = document.createElement("div");
        
    let table = document.createElement("table");
    let row = document.createElement("tr");
    let colum1 = document.createElement("td");
    let colum2 = document.createElement("td");
    table.style = "width:100%;"
    colum2.style ="width:50%;height:200px;";
    colum1.style ="width:50%; background-image: url("+JSON.stringify(TheImage.src + "")+");background-size:contain;background-repeat:no-repeat;";
    row.appendChild(colum1);
    row.appendChild(colum2);
    table.appendChild(row);
    div.appendChild(table);    
    
    
    //colum1.appendChild(TheImage);
    if(HumanInformationData === undefined){
        HumanInformationData = {
            "title": "_ please fill in information _",
            "autor": "_ please fill in information _",
            "reviewer": "_ please fill in information _",
            "examiner": "_ please fill in information _",
            "date": new Date().getTime()
        };
    }
    colum2.appendChild(HumanInformation(HumanInformationData));
    div.appendChild(document.createElement("br"));
    TheImage.style = "display: block; margin-right: auto;"
    TheImage.className = "image";
    div.appendChild(DisplayText(TheText));
    // todo: Pring Button... back? I guess?
    




    let btn = document.createElement("button");
    btn.innerHTML = "Print";
    btn.className = "no-print";
    let jsonBtn = document.createElement("button");
    jsonBtn.innerHTML ="Create Workfile";
    jsonBtn.className = "no-print";

    btn.onclick = function() {
        window.print();
    }
    div.appendChild(btn);
    jsonBtn.addEventListener("click", function(){
        downloadJSON();
    });
    div.appendChild(jsonBtn);
    
    SetBody(div);

}

function DisplayText(TextArray) {
    FunctionalTextArray = prepareText(TextArray);
    for(let i = 0; i<FunctionalTextArray.length; i++){
        let abs = document.createElement("div");
        for(let paragraph of FunctionalTextArray[i]){
            if(paragraph === ""){
                let par = document.createElement("br");
                abs.appendChild(par);
                continue;
            }
            let par = document.createElement("div");
            par.innerHTML = paragraph;
            abs.appendChild(par);
        }
        // make absatz klickable
        let tbOpen = false;
        abs.addEventListener("dblclick", function(e){ // functions to make the text editable...
            //what happens when an absatz has been double clicked on...
            console.log(e);
            //check if we are already inside the textbox, to dont open it twice...
            if(tbOpen){
                return;
            }
            tbOpen = true;
            abs.innerHTML = "";
            let tbtemp = document.createElement("textarea");
            tbtemp.style = "width:100%; height:300px;"
            //fill with the informations that where usally contained in the div
            for(let paragraph of FunctionalTextArray[i]){
                if(paragraph === ""){
                    //line
                    tbtemp.value += "\n\n";
                    continue;
                }
                //normal value
                tbtemp.value += paragraph;
            }
            tbtemp.onchange = function() {
                //function which puts the text back into Functional TextArray 
                //todo
                FunctionalTextArray[i] = tbtemp.value.split("\n");
                console.log("On Change");
                console.log(tbtemp);                
            }
            abs.appendChild(tbtemp);
            tbtemp.focus();
            tbtemp.addEventListener("focusout", function() {
                //when out of focus, create a function, that puts all the text in the tb back into the usual div format...
                FunctionalTextArray[i] = tbtemp.value.split("\n");
                TheText[i] = tbtemp.value;

                abs.innerHTML = ""
                for(let paragraph of FunctionalTextArray[i]){
                    if(paragraph === ""){
                        let par = document.createElement("br");
                        abs.appendChild(par);
                        continue;
                    }
                    let par = document.createElement("div");
                    par.innerHTML = paragraph;
                    abs.appendChild(par);
                }
                tbOpen = false;
                console.log("On Focus Out");
                console.log(tbtemp);
            })
        })
        WebSiteObjectArray.appendChild(abs);
        WebSiteObjectArray.appendChild(document.createElement("br"));
    }
    return WebSiteObjectArray//has to return a div which can be placed onto the website...
}

function prepareText(TextArray) {
    //currently, the text consists out of the collected information of the textareas from earlyer.
    //we now chop that up into smaller information bits to keep formatations.
    let ret = [];
    for(let entry of TextArray){
        //we are now inside one of the textboxes (or rather, the information they contained)
        //we are working now with the text directly.
        let paragraphs = entry.split("\n");
        ret.push(paragraphs);
    }
    return ret;
}

function HumanInformation(data) {
    let ret = document.createElement("div");

    let line1 = createClickableLine("Title: ", data.title, true, false, (x)=>data.title = x);
    let line2 = createClickableLine("Author: ", data.autor, true, true, (x)=>data.autor = x);
    let line3 = createClickableLine("Reviewer: ", data.reviewer, true, true, (x)=> data.reviewer = x);
    let line4 = createClickableLine("Date: ",  new Date(data.date).toLocaleDateString() ,false, false);
    let line5 = createClickableLine("Examiner: ", data.examiner, true, true, (x)=> data.examiner = x);
    let line6 = createClickableLine("Img. Src:", JSON.stringify(TheImage.src + ""), false, true);

    ret.appendChild(line1);
    ret.appendChild(document.createElement("br"));
    ret.appendChild(line2);
    ret.appendChild(document.createElement("br"));
    ret.appendChild(line3);
    ret.appendChild(document.createElement("br"));
    ret.appendChild(line4);
    ret.appendChild(document.createElement("br"));
    ret.appendChild(line5);
    ret.appendChild(document.createElement("br"));
    ret.appendChild(line6);
    return ret;
}


function createClickableLine(fixedSpan, inputSpan, editable, toPrint, writebackFunction) {
    let ret = document.createElement("div");
    let table = document.createElement("table");
    let tableRow = document.createElement("tr");
    let tableCol1 = document.createElement("td");
    let tableCol2 = document.createElement("td");

    table.style = "width:100%;" 
    tableCol1.style = "width: 10%"   
    
    let SPANFIX = document.createElement("span");
    let SPANINPUT = document.createElement("span");
    let TStorage = "";
    let tbOpen = false;
    SPANFIX.innerHTML = fixedSpan;
    SPANINPUT.innerHTML = inputSpan;
    tableCol1.appendChild(SPANFIX);
    tableCol2.appendChild(SPANINPUT);
    if(editable) {
        ret.addEventListener("dblclick", function(){
            if(tbOpen){
                return;
            }
            tbOpen = true;
            TStorage = SPANINPUT.innerHTML;
            console.log(TStorage);
            SPANINPUT.innerHTML = "";
            let tbtemp = document.createElement("input");
            tbtemp.type = "text";
            tbtemp.value = TStorage;
            tbtemp.size = TStorage.length * 1.1;
            tbtemp.onchange = function() {
                TStorage = tbtemp.value;
            }
            SPANINPUT.appendChild(tbtemp);
            tbtemp.focus();
            tbtemp.addEventListener("focusout", function() {
                tbOpen = false;
                SPANINPUT.innerHTML = "";
                SPANINPUT.innerHTML = tbtemp.value;
                if(writebackFunction !== undefined) {
                    writebackFunction(tbtemp.value);
                }   
            })
        })

    }

    tableRow.appendChild(tableCol1);
    tableRow.appendChild(tableCol2);

    if(!toPrint) {
        tableCol1.className = "no-print";
    }

    table.appendChild(tableRow);
    ret.appendChild(table);
    return ret
}

function downloadJSON() {
    let dataheap = {
        "source" : TheImage.src,
        "text" : TheText,
        "human" : HumanInformationData
    };

    let json = JSON.stringify(dataheap);
    json = [json];
    let blob1 = new Blob(json, {type: "text/plain;charset=utf-8"});
    let isIE = false;
    if(isIE){
        window.navigator.msSaveBlob(blob1, "ImageDiscription.json");
    } else{
        let url = window.URL || window.webkitURL;
        link = url.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "ImageDiscription.json";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
