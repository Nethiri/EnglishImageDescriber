
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