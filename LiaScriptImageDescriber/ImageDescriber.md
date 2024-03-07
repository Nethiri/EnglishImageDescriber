<!--
author:   Naumann Marco

email:    marconaumann@t-online.de

version:  0.0.2

language: en

narrator: US English Female

script: http://localhost:3000/home/html2canvas.js
script: http://localhost:3000/home/codemirror.js
script: http://localhost:3000/home/prism.min.js

link: http://localhost:3000/home/codemirror.min.css



script: http://localhost:3000/home/imageDescriberFunctions.js
script: http://localhost:3000/home/taskSelection.js
script: http://localhost:3000/home/ImageDescriber.js
script: http://localhost:3000/home/userTasks.js


link: http://localhost:3000/home/style.css
link: http://localhost:3000/home/print.css





OnLine_script: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/imageDescriberFunctions.js
OnLine_script: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/ImageDescriber.js
Online_script: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/userTasks.js

Online_link: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/style.css
Online_link: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/print.css


script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js
import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md

test: @Textanalysis.FULL

comment:  This is a small tool, which will help the user to learn how to propperly describe an image, a piece of code, or an graph.
-->

# Welcome
This tool will help you discribing Images, Graphs and Code.<br>
For general usability, we would recoment using the Darkmode of Liascript, as this tool has been designed with this colorpattern in mind.

# Image Describer

To begin your describing adventures you need to figure out what you want to describe.
You can either describe a picture, an graph or a piece of code...

**What do you want to describe:**

<div id="TypeSelectorPlace">if you can see this, the function placeSelect() has not loaded propperly...</div>

<div id="TypeSelectorFollowingContentPlace">if you can see this, the function onSelectChange(), as a event of placeSelect()'s selector has not loaded propperly...</div>

<script>placeSelect();</script>

<script modify="false"> 

let eventListenerDIV = document.getElementById('TypeSelectorPlace');
eventListenerDIV.addEventListener('sendLia', function (event) {
    let stringData = event.detail;
    send.liascript(stringData);
    console.log('send.liascript has been raised!');
    //console.log(stringData);
});

</script>


# Last minute edits

<div id="TextEditor">If you can see this, then TextEditor() did not load propperly... </div>

<script>TextEditor()</script>

# Text Analysis

On this page, you shall have an automated evaluation of your text below:
<div id="TestPlace"></div>

<script> PlaceTest() </script>

# Print / Save it!

If you want to save your work, so you may come back later to it... please press the button below:
<div id="Saver">If you can see this, then PlaceSaver() function has not loaded</div>
<script>PlaceSaver()</script>

---

If you want to print your work, you can do so below, though maybe add some nice informations like... your name and stuff first :)

Name:

<input id="NameBox" oninput="OnNameChange(this)">

Matrikel Number: 

<input id="MatBox" oninput="OnNameChange(this)">



<div id="Printer">If you can see this, the PlacePrinter() function has not loaded propperly...</div>

<script> PlacePrinter() </script>
