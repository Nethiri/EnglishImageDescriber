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
                TBcontent = data.text;
                ImgUrlLink = data.source;
                document.getElementById("LinkTextBox").value = data.source;
                //function which reads the JSON file and puts the data into the correct places
                //alert("ToDo - Contact Marco Naumann under marconaumann@t-online.de if you encounter this error, or via discord");
                document.getElementById("LaunchButton").click();
            }
            catch(ex){
                alert(ex);
            }
        }
        fr.readAsText(e.target.files[0]);
    }
    return fileSelector;
}


function LiaScriptPlaceElements(liaScriptString, replaceObject) {

    replaceDIV = document.getElementById(replaceObject);
    replaceDIV.innerHTML = "";
    replaceDIV.innerHTML = send.liascript(userTask());
    

}
