const descriptionType = {};

descriptionType.picture = function(num) {
    if(num == 0) { return "To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>If you look at this picture, you will see...<br>In the picture you can see...<br>The picture shows...<br>"; }
    if(num == 1) { return "Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The image we are looking at has been painted/taken at...<br>When you look at the image, you can see that it is a black and white...<br>This picture is a... picture and has been taken by...<br>"; }
    if(num == 2) { return "Okay... we should now have finished the introduction of your description.<Br><Br>So, now please describe the picture and use phrases like:<br>In the foreground of the picture you will...<Br>In the background you can see that...<Br>In the right/left/center...<br>Between ... there is ...<br>At the top/At the bottom there is...<br>";}
    if(num == 3) { return "Now we know what we see on the picture. Lets focus now on who is doing what or what is going on.<br><br>To take some examples:<br>The... is talking to...<br>... is gesturing to...<br>";}
    if(num == 4) { return "So, that all is fine and dandy, lets now focus on what you are thinking... What do you think is the meaning of the picture?<br><br>Here are some examples:<br>It seems as if...<br>... might be a simbole of ... because...<br>I (don't) like ... because<br>... makes me think of ...<br>";}
    console.log("picture only has 5 entries...");
    return -1;
}

descriptionType.graph = function(num) {
    if(num == 0) {return "To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>Let me show you this bar graph...<br>Let's turn to this diagram...<br>I'd like you to look at this map...<br>"}
    if(num == 1) {return "Now that we have the attention of your reader, and we have a general understanding of what has been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The graph we are looking at has been published by...<br>The vertical axis shows...<br>Ther horizontal axis shows..."}
    if(num == 2) {return "Okay... we should now have finished the introduction of your description.<br><br>Consider phrases like:<br>So, now please describe what you see and the meaning of the information displayed.<br>Each number are equivalent to 1 million...<br>The ... rises/increased/decreased/flattens...<br>The graph rapidly..."}
    if(num == 3) {return "Okay... lets bring that baby home guys. Let us finish with the conclusion, and we are done here!<br><br>Here are some examples to use:<br>Overall, we can see that...<br>In the end, you'll see...<br>From this we can conclude...<br>"}
    console.log("graph only has 4 entries...");
    return -1;
}

descriptionType.code = function(num) {
    if(num == 0) {"Code descriptions are a bit more unorthodox than normal image descriptions.<br>So, what do we have to look for in a code description?<br><br>First of all, we have to figure out the context of this code...<br><br>Here are some examples which may help you to do just that:<br>Looking at the code(snipped) as a whole, you can see that...<br>This code(snipped) has been written in...<br>This code(snipped) is a [...] which returns a..."}
    if(num == 1) {"What is this code all about?<br>Describe what you think it is used for, or where you have found it...<br><br>Some helpful examples:<br>The [...] uses this [...] for...<br>One might need this in...<br>When you are [...] you might need a function like this to..."}
    if(num == 2) {"Okay, furthermore, now its time to look at the code in more detail. What can you see?<br>This might be achievable by looking at it line by line...<br><br>Here are some examples which might help you:<br>In the first line you can see that it is a call to a...<br>In Line [...] you can see, that variable [...] is defined with...<br>In the next line, the previouly defined [...] is used for..."}
    if(num == 3) {"Code is never perfect... have you spotted a mistake? Would this code run at all, or would the compiler just throw a warning?<br>Let's write about it, and remember 'Be the compiler'<br><br>Here are some examples which might help:<br>In Line [...], the pointer to the variable [...] is used instead of the...<br>The line has not been completed and there is a [...] missing at the end.<br>The [...] of the function [...] is undefined."}
    console.log("code only has 4 entries...");
    return -1;
}
