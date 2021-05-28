const TextBoxArray = []
const DivArray = [] 
let TheImage = document.createElement("img");

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
    textBox.style ="width:210";


    button.innerHTML = "Load Image";
    button.addEventListener("click", function() {
        loadImage(textBox.value);
    });
    div.appendChild(HowToUse);
    div.appendChild(textBox);
    div.appendChild(button);
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
    DiscribeMyImage(imgBeschreibung);
    div.appendChild(imgBeschreibung);
    SetBody(div);
}

function DiscribeMyImage(location) {    
    location.appendChild(createTextBox("To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>If you look at this picture, you will see...<br>In the Picture you can see...<br>The Pricture shows...<br>"));
    location.appendChild(createTextBox("Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The image we are looking at has been painted/taken at...<br>When you look at the image, you can see that it is a black and white...<br>This picture is a... picture and has been taken by...<br>"));
    location.appendChild(createTextBox("Okay... we should now have finished the introduction of your discription.<Br><Br>So, now please discribe the picture and use Phrases like:<br>In the forthground of the picte you will...<Br>In the background you can see that...<Br>In the right/left/center...<br>Between ... there is ...<br>At the top/At the bottom there is...<br>"));
    location.appendChild(createTextBox("Now we know what we see on the picture. Lets focus now on who is doing what or what is going on.<br><br>To take some examples:<br>The... is talking to...<br>... is guesturing to...<br>"));
    location.appendChild(createTextBox("So, that all is fine and dandy, lets now focus on what you are thinking... What do you think is the meaning of the picture?<br><br>Here are some examples:<br>It seems as if...<br>... might be a simbole of ... because...<br>I (don't) like ... because<br>... makes me think of ...<br>"));
}

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
    textfeld.onchange = function() {
        //todo
    }
    beschreibungsfeld.innerHTML = beschreibung;

    ret.appendChild(beschreibungsfeld);
    ret.appendChild(textfeld);
    TextBoxArray.push(ret);
    return ret;    
}








