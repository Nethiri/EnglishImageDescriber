const TextBoxArray = [];
const DivArray = [];
let Selecttype = "Bild";
let TheImage = document.createElement("img");
let TheText = [];
let WebSiteObjectArray = document.createElement("div");
let FunctionalTextArray = [];
let HumanInformationsArray = [];
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
    HowToUse.innerHTML = "In order to use this tool. Please insert a Link to an Image you'd like to discribe below.";
    HowToUse.style = "display: block;text-align: center;line-height: 150%;font-size: 1em;"
    button.style ="width:90";
    textBox.style ="width:160";
    let select = document.createElement("select");
    select.style ="width:50;height:22";
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");

    opt1.value = "Bild";
    opt2.value = "Graph";
    opt1.appendChild(document.createTextNode("Bild"));
    opt2.appendChild(document.createTextNode("Graph"));
    select.appendChild(opt1);
    select.appendChild(opt2);
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
    div.appendChild(select)
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
    else{    
        DiscribeMyImage(imgBeschreibung);
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
    location.appendChild(createTextBox("To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>If you look at this picture, you will see...<br>In the Picture you can see...<br>The Pricture shows...<br>"));
    location.appendChild(createTextBox("Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The image we are looking at has been painted/taken at...<br>When you look at the image, you can see that it is a black and white...<br>This picture is a... picture and has been taken by...<br>"));
    location.appendChild(createTextBox("Okay... we should now have finished the introduction of your discription.<Br><Br>So, now please discribe the picture and use Phrases like:<br>In the forthground of the picte you will...<Br>In the background you can see that...<Br>In the right/left/center...<br>Between ... there is ...<br>At the top/At the bottom there is...<br>"));
    location.appendChild(createTextBox("Now we know what we see on the picture. Lets focus now on who is doing what or what is going on.<br><br>To take some examples:<br>The... is talking to...<br>... is guesturing to...<br>"));
    location.appendChild(createTextBox("So, that all is fine and dandy, lets now focus on what you are thinking... What do you think is the meaning of the picture?<br><br>Here are some examples:<br>It seems as if...<br>... might be a simbole of ... because...<br>I (don't) like ... because<br>... makes me think of ...<br>"));
}

function DiscribeMyGraph(location) {
    location.appendChild(createTextBox("To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>Let me show you this bar graph...<br>Let's turn to this diagram...<br>I'd like you to look at this map...<br>"));
    location.appendChild(createTextBox("Now that we have the attention of your reader, and we have a general understanding of what has been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The graph we are looking at has been published by...<br>The vertical axis shows...<br>Ther horizontal axis shows..."));
    location.appendChild(createTextBox("Okay... we should now have finished the introduction of your discription.<br><br>Consider phrases like:<br>So, now please discribe what you see and the meaning of the informations displayed.<br>Each number are quivalent to 1 million...<br>The ... rises/increased/decreased/flattens...<br>The graph rapidly..."));
    location.appendChild(createTextBox("Okay... lets bring that baby home guys. Let us finish with the conclusion, and we are done here!<br><br>Here are some examples to use:<br>Overall, we can see that...<br>In the end, you'll see...<br>From this we can conclude...<br>"));
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
    colum2.style ="width:50%;height:100px;";
    colum1.style ="width:50%; background-image: url("+JSON.stringify(TheImage.src + "")+");background-size:contain;background-repeat:no-repeat;";
    row.appendChild(colum1);
    row.appendChild(colum2);
    table.appendChild(row);
    div.appendChild(table);    
    
    
    //colum1.appendChild(TheImage);
    colum2.appendChild(document.createTextNode("Hier könnte Ihre Werbung stehen..."));
    div.appendChild(document.createElement("br"));
    TheImage.style = "display: block; margin-right: auto;"
    TheImage.className = "image";
    div.appendChild(DisplayText(TheText));
    // todo: Pring Button... back? I guess?





    let btn = document.createElement("button");
    btn.innerHTML = "Print";
    btn.className = "no-print";

    btn.onclick = function() {
        window.print();
    }
    div.appendChild(btn);
    
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
                //display again
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

function HumanInformation() {
    let ret = document.createElement("div");
    let table = document.createElement("table");
    let today = new Date();
    


    let line1 = createClickableLine("Titel: ", "_ please fill in information _", true);
    let line2 = createClickableLine("Autor: ", "_ please fill in information _", true);
    let line3 = createClickableLine("Reviewer: ", "_ please fill in information _", true);
    let line4 = createClickableLine("Datum: ", today.getMonth() + "." + today.getDate() + "." + today.getFullYear() ,false);
    let line5 = createClickableLine("Examiner: ", "_ please fill in information _", true);
    let line6 = createClickableLine("Img. Src:", JSON.stringify(TheImage.src + "", false));

    ret.appendChild(line1);
    ret.appendChild(line2);
    ret.appendChild(line3);
    ret.appendChild(line4);
    ret.appendChild(line5);
    ret.appendChild(line6);
    return ret;
}


function createClickableLine(fixedSpan, inputSpan, editable) {
    let ret = document.createElement("div");
    let SPANFIX = document.createElement("span");
    let SPANINPUT = document.createElement("span");
    let TStorage = "";
    let tbOpen = false;
    SPANFIX.innerHTML = fixedSpan;
    SPANINPUT.innerHTML = inputSpan;
    ret.appendChild(SPANFIX);
    ret.appendChild(SPANINPUT);
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
            })
        })

    }
    return ret
}
