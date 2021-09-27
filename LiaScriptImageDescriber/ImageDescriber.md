<!--
author:   Naumann Marco

email:    marconaumann@t-online.de

version:  0.0.1

language: en

narrator: US English Female

script: http://localhost:3000/home/imageDescriberFunctions.js
script: http://localhost:3000/home/ImageDescriber.js
script: http://localhost:3000/home/userTasks.js  

link: http://localhost:3000/home/style.css

script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js

comment:  This is a small tool, which will help the user to learn how to propperly describe an image, a piece of code, or an graph.
-->

# Welcome
This tool will help you discribing Images, Graphs and Code.

# Image Describer

To begin your describing adventures you need to figure out what you want to describe.
You can either describe a picture, an graph or a piece of code...

**What do you want to describe:**

<div id="TypeSelectorPlace">if you can see this, the function placeSelect() has not loaded propperly...</div>

<script>placeSelect();</script>

---
Now that we have the general idea of what you want to do, we need the verry object you would like to train discribing on.  

For the current itteration of this program, please insert a Link into the inputbox below which is a direct link to an image of what you want to discribe.

Here is an example Link: https://www.seekpng.com/png/detail/176-1761248_elder-goddess-little-pony-mlp-magnaluna.png 

**Link to your Image:**
<div id="ImageLinkPlace">if you can see this, the function placeLinkReader() has not loaded propperly... </div>

<script>placeLinkReader();</script>

---
Some of you may already have started a project earlyer... if that is the case... feel free to open it here...
<div id="FileReaderPlace">if you can see this, the function placeFileReader() has not worked propperly...</div>

<script>placeFileReader()</script>

---

Once you have entered everything correctly, a script, generated just for you, should display your tasks below.

<div id="UserTaskPlace">if you can see this, the function userTask() has not worked propperly...</div>

<script modify="false" run-once="true"> 
    document.getElementById("UserTaskPlace").innerHTML = "";
    document.getElementById("LaunchButton").onclick = function() {
        send.liascript(userTask());
    }
    document.getElementById("LinkTextBox").addEventListener("change", function() {
        send.liascript(userTask());
    });
</script>