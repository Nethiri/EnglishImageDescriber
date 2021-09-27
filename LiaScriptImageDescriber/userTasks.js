const userTasks = {}

userTasks.graph = function() {
    let url = document.getElementById("LinkTextBox").value;
    return `
---------
![](${url})

Attention  
========= 
        
To capture the attention of your readers, you should start with a good introduction phrase(s).\n
Here are some examples you may use:

* If you look at this picture, you will see...
* In the picture you can see...   
* The picture shows... 
            
<textarea id="graphTextArea1">Please enter text here!</textArea>


`
}